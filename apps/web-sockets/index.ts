import { createServer } from "http";
import { Server } from "socket.io";
import config from "./config";

const httpServer = createServer();
const io = new Server(httpServer, config.socketOptions);
const PORT = 3344;

io.on("connection", (socket) => {
    console.log("SOCKET CONNECTED!!");

    socket.on("socket:health-check", (data) => {
        console.log("socket:health-check", data);
        io.emit("socket:health-check-response", {
            message: "Hello from server",
        });
    });


    // ticTacToe(io, socket);

    socket.on("disconnect", () => {
        console.log(`Disconnected: ${socket.id}`);
    });
});

httpServer.listen(PORT, () => {
    console.log(`SOCKET IS CONNECTED on ${PORT}`);
});