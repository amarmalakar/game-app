"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
}

const SocketContext = createContext<SocketContextType | null>({
  socket: null,
  isConnected: false,
  isLoading: true,
  error: null,
});

export default function SocketProvider({ children }: SocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socketInstance = io("localhost:3344");
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Socket connected:", socketInstance.id);
      setIsConnected(true);
      setIsLoading(false);
    });

    socketInstance.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
      setError("Failed to connect to socket");
      setIsLoading(false);
    });

    socketInstance.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="text-center mt-14">
  //       <h2>Finding socket connection...</h2>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="text-center mt-14">
  //       <h2>Error: {error}</h2>
  //       <p>Please try again later.</p>
  //     </div>
  //   );
  // }

  // if (!socket || !isConnected) {
  //   return (
  //     <div className="text-center mt-14">
  //       <h2>Reconnecting to socket...</h2>
  //     </div>
  //   );
  // }

  return (
    <SocketContext.Provider value={{ socket, isConnected, isLoading, error }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketProvider = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketProvider must be used within a SocketProvider");
  }
  return context;
};
