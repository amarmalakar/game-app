import { Server, Socket } from "socket.io";
// import createRoom from "./event-handlers/create-room";
// import { ITicTacToeState } from "@repo/types";
// import getRoom from "./event-handlers/get-room";
// import joinRoom from "./event-handlers/join-room";
// import gameHandler from "./event-handlers/game-handler";

const gameState: ITicTacToeState = {
  rooms: {}
}

const ticTacToe = (io: Server, socket: Socket) => {
  socket.emit("TIC_TAC_TOE_STATE", gameState);

//   createRoom(socket, gameState);
//   getRoom(socket, gameState);
//   joinRoom(io, socket, gameState);
//   //   disconnectHandler(io, socket, gameState);
  
//   gameHandler(io, socket, gameState);
}

export default ticTacToe;