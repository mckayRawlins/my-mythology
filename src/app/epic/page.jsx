"use client";

import Image from "next/image";
import EpicFetcher from "../_components/EpicFetcher";
import DisplaySagas from "../_components/DisplaySagas";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [linkStyle, setLinkStyle] = useState("list");

  const handleLinkStyle = (toggle) => {
    switch (toggle) {
      case "radial":
        setLinkStyle("radial");
        break;
      case "list":
        setLinkStyle("list");
        break;
    }
  };
  return (
    <div className="flex flex-col items-center p-10 min-h-screen relative w-[100%] bg-black text-white font-serif">
      <div className="absolute rounded-full w-fit px-3 mx-2 my-5 left-0 top-0 text-white font-serif bg-slate-300/20 border border-white/80 hover:bg-slate-300/50">
        <Link href="/">Home</Link>
      </div>
      <div>
        <div className="w-fit mx-auto">
          <Image src="/epiclogo.png" width={300} height={200} alt="epic logo" />
        </div>
        <p className="text-center">The Musical</p>
      </div>
      <div className="flex">
        <button
          className="m-5 p-3 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"
          onClick={() => handleLinkStyle("radial")}
        >
          radial
        </button>
        <button
          className="m-5 p-3 rounded-2xl bg-gray-600 hover:bg-gray-500 hover:cursor-pointer"
          onClick={() => handleLinkStyle("list")}
        >
          list
        </button>
      </div>
      <div>
        {linkStyle === "radial" && <EpicFetcher />}
        {linkStyle === "list" && <DisplaySagas />}
      </div>
    </div>
  );
}
