"use client";

import { useSocketProvider } from "@/components/providers/socket-provider";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function TestGame() {
  const { socket } = useSocketProvider();
  const [message, setMessage] = useState("")

  const socketHealCheck = () => {
    socket.emit("socket:health-check", {
      message: "Hello from client",
    });
  };

  useEffect(() => {
    socket.on("socket:health-check-response", (data) => {
      setMessage(data.message);
    });
  }, [])
  
  return (
    <div>
      <Button
        onClick={() => {
          alert("Test");
        }}
      >
        Click me!
      </Button>
      <Button onClick={socketHealCheck}>Socket Health Check</Button>
      <p>{message}</p>
    </div>
  );
}
