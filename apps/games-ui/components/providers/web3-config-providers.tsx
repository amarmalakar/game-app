"use client"

import wagamiConfig from "@/lib/wagami-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { WagmiProvider, type State } from "wagmi";

export default function Web3ConfigProviders({
  children,
  initialState
}: Readonly<{
  children: React.ReactNode;
  initialState: State | undefined;
}>) {
  const [config] = useState(() => wagamiConfig());
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
