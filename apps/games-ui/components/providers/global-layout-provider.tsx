import React from "react";
import SocketProvider from "./socket-provider";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import wagamiConfig from "@/lib/wagami-config";
import Web3ConfigProviders from "./web3-config-providers";

export default async function GlobalLayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    wagamiConfig(),
    (await headers()).get("cookie")
  );
  return (
    <SocketProvider>
      <Web3ConfigProviders initialState={initialState}>
        {children}
      </Web3ConfigProviders>
    </SocketProvider>
  );
}
