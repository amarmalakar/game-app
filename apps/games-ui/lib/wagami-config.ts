import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";
import {defineChain} from "viem";

// Define the Ganache chain
const ganache = defineChain({
    id: 1337,
    name: "Ganache",
    network: "ganache",
    rpcUrls: {
        default: {
            http: ["http://127.0.0.1:8545"],
        },
    },
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
    },
});

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;

export default function wagmiConfig() {
    return createConfig({
        chains: [mainnet, sepolia, ganache],
        ssr: true,
        storage: createStorage({
            storage: cookieStorage,
        }),
        transports: {
            [mainnet.id]: http(),
            [sepolia.id]: http(),
            [ganache.id]: http(),
        },
        connectors: [
            injected(),
            metaMask(),
            walletConnect({ projectId: walletConnectProjectId }),
            safe({ debug: true }),
        ],
    });
}
