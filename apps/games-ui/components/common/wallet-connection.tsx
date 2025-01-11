"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ChevronDown } from "lucide-react";

function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className="grid gap-3">
      {connectors.map((connector) => (
        <Button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </Button>
      ))}
    </div>
  );
}

export default function WalletConnection() {
  const account = useAccount();
  const { address } = account;
  const { disconnect } = useDisconnect();

  return address ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {address.slice(0, 6)}...{address.slice(-4)}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel
          onClick={() => disconnect()}
          className="cursor-pointer"
        >
          Disconnect
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>Connect wallet</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Connect web3 wallet</AlertDialogTitle>
          {/* <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription> */}
        </AlertDialogHeader>
        <div className="">
          <WalletOptions />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
