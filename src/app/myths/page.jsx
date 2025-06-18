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
    id: "gods",
  },
  {
    title: "Titans",
    href: "/myths/titans",
    icon: "⛰️",
    description: "Ancient primordial beings",
    gradient: "from-yellow-500 to-green-500",
    id: "titans",
  },
  {
    title: "Monsters",
    href: "/myths/monsters",
    icon: "🐍",
    description: "Fearsome legendary beasts",
    gradient: "from-green-500 to-blue-500",
    id: "monsters",
  },
  {
    title: "Heroes",
    href: "/myths/heroes",
    icon: "⚔️",
    description: "Champions of legend",
    gradient: "from-blue-500 to-violet-500",
    id: "heroes",
  },
];

export default async function Page() {
  return (
    <div className="min-h-screen relative text-center bg-gradient-to-br from-blue-200 via-sky-200 to-blue-200 p-8">
      <div className="absolute rounded-lg w-fit px-3 mx-2 my-5 left-0 top-0 text-black bg-sky-300/20 border border-slate-600/80 hover:bg-sky-300/50">
        <Link href="/">Home</Link>
      </div>
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
              className="my-15 mx-auto py-3 w-[80%] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-100/30"
            >
              <MythLinkCard
                title={link.title}
                href={link.href}
                icon={link.icon}
                description={link.description}
                gradient={link.gradient}
                id={link.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
