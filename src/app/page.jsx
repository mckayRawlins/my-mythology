"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <div className="min-h-screen text-center bg-gradient-to-br from-slate-950 via-gray-900 to-black p-8">
        <div className="mb-6">
          <span
            className="text-6xl mb-4 block animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            ⚡
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            My Greek Mythology
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
          Embark on an epic journey through ancient tales of gods, heroes, and
          legends.
          <br />
          <span className="text-blue-200 font-medium">
            Your adventure into the realm of myth begins here.
          </span>
        </p>

        <div className="mt-4 text-sm text-slate-400 italic">
          ✨ Currently forging new legends - more wonders await! ✨
        </div>

        <div className="flex flex-col gap-8 items-center mt-5">
          <Link href="/myths">
            <div
              className="group flex flex-col items-center text-center p-10 rounded-lg border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-gray-900/40 backdrop-blur-sm"
              onMouseEnter={() => setHoveredCard("myths")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`text-8xl md:text-9xl mb-6 transition-all duration-300 ${
                  hoveredCard === "myths" ? "animate-pulse scale-110" : ""
                }`}
              >
                🏛️
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-3 group-hover:text-blue-50 transition-colors">
                Explore Greek Myths
              </h3>
              <p className="text-slate-300 text-sm md:text-base max-w-xs leading-relaxed">
                Discover the timeless stories of gods, titans, and mortals that
                shaped civilization
              </p>
            </div>
          </Link>
          <Link href="/epic">
            <div
              className="group flex flex-col items-center text-center p-10 rounded-lg border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-gray-900/40 backdrop-blur-sm"
              onMouseEnter={() => setHoveredCard("epic")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`text-8xl md:text-9xl mb-6 transition-all duration-300 ${
                  hoveredCard === "epic" ? "animate-pulse scale-110" : ""
                }`}
              >
                ⚔️
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-100 mb-3 group-hover:text-blue-50 transition-colors">
                EPIC: The Musical
              </h3>
              <p className="text-slate-300 text-sm md:text-base max-w-xs leading-relaxed">
                Experience Odysseus's legendary journey through song and
                spectacle
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
