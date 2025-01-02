const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// Enviar la configuración al conectar un cliente
io.on("connection", (socket) => {
  console.log("A client connected");

  const configPath = path.join(__dirname, "config.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  let total = config.floors.reduce((total, n) => total + n.size, 0);
  let available = total;
  let busy = 0;

  for (let i = 0; i < config.floors.length; i++) {
    const floorSize = config.floors[i].size;
    const tables = Array(floorSize).fill(true);
    config.floors[i] = { ...config.floors[i], tables };
  }

  socket.emit("initialData", config.floors);
  socket.emit("totalTables", total);
  socket.emit("availableTables", available);
  socket.emit("busyTables", busy);

  socket.on("newAvailable", ({ tableIndex, floorIndex }) => {
    config.floors[floorIndex].tables[tableIndex] = true;
    io.emit("initialData", config.floors);
    if (busy > 0) {
      available++;
      busy--;
      io.emit("availableTables", available);
      io.emit("busyTables", busy);
    }
  });

  socket.on("newBusy", ({ tableIndex, floorIndex }) => {
    config.floors[floorIndex].tables[tableIndex] = false;
    io.emit("initialData", config.floors);
    if (available > 0) {
      busy++;
      available--;
      io.emit("availableTables", available);
      io.emit("busyTables", busy);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
