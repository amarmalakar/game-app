"use client";

import { Card, CardTitle } from "@/components/ui/card";
import React from "react";
import RoomHandler from "./_components/room-handler";
import { useSocketProvider } from "@/components/providers/socket-provider";
import { Icons } from "@/components/common/icons";

export default function TicTacToePage() {
  const { isLoading } = useSocketProvider();
  return (
    <div className="p-4">
      <Card className="max-w-xl m-auto p-4 mt-6 shadow-xl">
        <CardTitle className="text-center py-3">TIC TAC TOE</CardTitle>

        {isLoading ? (
          <div className="my-20 flex items-center justify-center">
            <Icons.Spinner className="animate-spin mr-2 w-5 h-5" />
            Finding socket connection...
          </div>
        ) : (
          <RoomHandler />
        )}
      </Card>
    </div>
  );
}
