"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useLocalStorage from "../_hooks/useLocalStorage";

export default function DisplayFavSongs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage(
    "favoriteSongs",
    []
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!favoriteSongs) {
    return <div>No data avaliable</div>;
  }

  return (
    <div
      className={`text-white font-serif p-10 min-h-screen bg-gradient-to-br from-slate-800 via-slate-600 to-slate-800`}
    >
      <div className="w-fit mx-auto opacity-40">
        <Image src="/epiclogo.png" width={300} height={200} alt="epic logo" />
      </div>
      <h1 className="text-center text-5xl">Favorite Songs</h1>
      <h3 className="text-center text-white/50">
        EPIC: The Musical - Jorge Rivera-Herrans
      </h3>
      {favoriteSongs.map((song) => {
        return (
          <div
            key={song.id}
            className="flex flex-col min-w-fit my-8 p-8 rounded-2xl bg-slate-300/20 border border-white/80 backdrop-blur-2xl"
          >
            <div>
              <h2 className="text-3xl">{song.title}</h2>
              <p>{song.saga}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
