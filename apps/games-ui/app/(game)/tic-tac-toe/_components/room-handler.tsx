"use client";

import { useSocketProvider } from "@/components/providers/socket-provider";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAccount } from "wagmi";

export default function RoomHandler() {
  const { socket, error } = useSocketProvider();
  const { address } = useAccount();
  
  if (!address) {
    return (
      <div className="text-center my-20">
        <h2>Connect wallet to play</h2>
      </div>
    );
  }

  if (error || !socket) {
    return (
      <div className="text-center my-20">
        <h2>Socket connection issue!</h2>
      </div>
    );
  }

  const createRoom = () => {
    socket.emit("create-room", { address });
  };

  return (
    <div className="grid gap-3 justify-center my-20">
      <Button size="lg" onClick={createRoom}>CREATE ROOM</Button>
      <Button size="lg">JOIN ROOM</Button>
    </div>
  );
}
