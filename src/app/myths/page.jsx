import Link from "next/link";
import MythFetcher from "../_components/MythFetcher";
import MythLinkCard from "../_components/MythLinkCard";
const mythLinkData = [
  {
    title: "Gods",
    href: "/myths/gods",
    icon: "⚡",
    description: "Divine rulers of Olympus",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    title: "Titans",
    href: "/myths/titans",
    icon: "⛰️",
    description: "Ancient primordial beings",
    gradient: "from-yellow-500 to-green-500",
  },
  {
    title: "Monsters",
    href: "/myths/monsters",
    icon: "🐍",
    description: "Fearsome legendary beasts",
    gradient: "from-green-500 to-blue-500",
  },
  {
    title: "Heroes",
    href: "/myths/heroes",
    icon: "⚔️",
    description: "Champions of legend",
    gradient: "from-blue-500 to-violet-500",
  },
];

export default async function Page() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-10">
        Expore Ancient Greek Myths and Ledgends
      </h1>
      <div className="flex justify-center space-x-4 mt-10 text-3xl animate-bounce">
        <span className="animate-pulse">🏛️</span>
        <span className="animate-pulse delay-300">🏹</span>
        <span className="animate-pulse delay-700">🏛️</span>
      </div>
      <div>
        {mythLinkData.map((link) => {
          return (
            <div
              key={link.title}
              className="my-15 mx-auto py-3 w-[80%] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-100"
            >
              <MythLinkCard
                title={link.title}
                href={link.href}
                icon={link.icon}
                description={link.description}
                gradient={link.gradient}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
