import GameCard from "@/components/common/game-card";
import { gameList } from "@/constants";
import { ITestType } from "@repo/types";

const test: ITestType = {
  address: "",
  age: 0,
  email: "",
  id: 0,
  name: "",
  phone: "",
};

export default function Home() {
  console.log(test);
  return (
    <div className="p-4">
      {/* <Web3Account />
      <br />
      <hr />
      <br />
      <WalletOptions /> */}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 max-w-6xl m-auto">
        {gameList.map((game, idx) => (
          <GameCard game={game} key={idx} />
        ))}
      </div>
    </div>
  );
}
