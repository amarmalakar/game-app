import React from "react";
import SocketProvider from "./socket-provider";

export default function GlobalLayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SocketProvider>{children}</SocketProvider>;
}
