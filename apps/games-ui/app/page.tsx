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
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veritatis dolorem tempore ea sequi ad aperiam illum corporis unde minima ipsa, nam reiciendis culpa architecto odit ipsum iure adipisci cumque.</p>
    </div>
  );
}
