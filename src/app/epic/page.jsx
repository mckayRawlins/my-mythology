"use client";

import Image from "next/image";
import EpicFetcher from "../_components/EpicFetcher";
import DisplaySagas from "../_components/DisplaySagas";
import { useState } from "react";

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
    <div className="flex flex-col items-center p-10 min-h-screen w-[100%] bg-black text-white font-serif">
      <div>
        <img src="https://i.namu.wiki/i/IjcSCSQ9J9ygQrb2tmovlxpqX3-6w479jhYDxwBR41tVtG8pXR7gmqtVPdR6nS9NHcJKzvj1Sg6xixHMrsLOBg.webp" />
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
