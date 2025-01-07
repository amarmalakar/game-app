"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketContextType {
  socket: Socket;
}

const SocketContext = createContext<SocketContextType | null>(null);

export default function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io("localhost:3333");
    setSocket(socketInstance);
    
    socketInstance.on("connect", () => {
      console.log("Socket connected:", socketInstance.id);
      setIsConnected(true);
    });
    
    socketInstance.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  if (!socket || !isConnected) {
    return (
      <div className="text-center mt-14">
        <h2>Finding socket connection...</h2>
      </div>
    );
  }

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketProvider = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketProvider must be used within an SocketProvider");
  }
  return context;
};
