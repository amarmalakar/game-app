import { IGame } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function GameCard({ game }: { game: IGame }) {
  const { bgColor, name, url } = game;

  return (
    <Link
      href={url}
      className="aspect-[1/.6] rounded-md group overflow-hidden shadow-lg text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-[1.075]">
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-35",
            "bg-[url('./assets/images/stuff.png')] bg-[length:100%] bg-center bg-repeat",
            "background-game-card animate-[tileAnimation_5s_linear_infinite]"
          )}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {name}
        </div>

        <div className="bg-black/70 text-white uppercase font-bold text-xs px-2 py-1 rounded-md absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          play {name}
        </div>
      </div>
    </Link>
  );
}
