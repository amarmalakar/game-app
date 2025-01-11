import WalletConnection from "./wallet-connection";

const links = [
  {
    title: "Hire us",
    url: "/hire-us"
  }, {
    title: "Contact us",
    url: "/contact-us"
  }
]

export default function Navbar() {
  return (
    <nav className="h-16 shadow-2xl px-4">
      <div className="max-w-6xl m-auto h-full flex justify-between items-center">
        <h1 className="font-bold text-lg">GAME-APP</h1>

        <ul className="">
          {links.map((link, idx) => (
            <li key={idx} className="inline-block mx-3 uppercase text-sm hover:underline">
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>

        <WalletConnection />
      </div>
    </nav>
  );
}
