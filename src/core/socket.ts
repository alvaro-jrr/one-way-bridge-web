import { io } from "socket.io-client";

const url = "http://localhost:3000";

export const socket = io(url, {
  reconnectionDelay: 1000 * 5,
});

socket.on("connect", () => {
  console.log(`Connected to socket on ${url}`);
});

socket.on("disconnect", () => {
  console.log(`Disconnected from socket`);
});
