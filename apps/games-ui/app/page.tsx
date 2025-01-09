import { WalletOptions } from "@/components/common/wallet-options";
import { Web3Account } from "@/components/common/web3-account";
import { ITestType } from "@repo/types";

const test: ITestType = {
  address:  "",
  age: 0,
  email: "",
  id: 0,
  name: "",
  phone: ""
}

export default function Home() {
  console.log(test)
  return (
    <div className="">
      <Web3Account />
      <br />
      <hr />
      <br />
      <WalletOptions />
    </div>
  );
}
