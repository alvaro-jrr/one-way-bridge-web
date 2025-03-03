import { io } from "socket.io-client";

const url = "http://localhost:3000";

export const socket = io(url);

socket.on("connect", () => {
  console.log(`Connecto to socket on ${url}`);
});

socket.on("disconnect", () => {
  console.log(`Disconnected from socket`);
});
