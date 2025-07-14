"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useLocalStorage from "../_hooks/useLocalStorage";

export default function SagaFetcher({ sagaId }) {
  const [sagaData, setSagaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songLyrics, setSongLyrics] = useState(new Set());
  const [playingSong, setPlayingSong] = useState(null);
  const [favorite, setFavorite] = useLocalStorage("favoriteSongs", []);

  useEffect(() => {
    const fetchEpicData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://calculator-mx2q.onrender.com/api/epicthemusical/${sagaId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setSagaData(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicData();
  }, [sagaId]);

  const togglePlayingSong = (songId) => {
    setPlayingSong(playingSong === songId ? null : songId);
  };

  const toggleLyrics = (songId) => {
    setSongLyrics(songLyrics === songId ? null : songId);
  };

  const toggleFavorite = (favSong) => {
    const alreadyFavorite = favorite.some(
      (song) => song.title === favSong.title
    );

    const updatedFavorites = alreadyFavorite
      ? favorite.filter((song) => song.title !== favSong.title)
      : [
          ...favorite,
          { id: Date.now(), title: favSong.title, saga: favSong.saga },
        ];

    setFavorite(updatedFavorites);
    console.log(updatedFavorites);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-500 to-slate-900 p-8">
        <div className="max-w-[60%] mx-auto">
          {/* Loading header skeleton */}
          <div className="h-12 bg-gradient-to-r from-blue-100/20 to-slate-50/20 rounded-lg animate-pulse mb-12"></div>

          {/* Loading grid skeleton */}
          <div className="flex flex-col">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br mt-10 from-white/10 to-white/5 rounded-xl animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!sagaData) {
    return <div>No data avaliable</div>;
  }

  return (
    <div
      className={`text-white font-serif p-10 min-h-screen bg-gradient-to-br ${sagaData.themeGradient}`}
    >
      <div className="w-fit mx-auto opacity-40">
        <Image src="/epiclogo.png" width={300} height={200} alt="epic logo" />
      </div>
      <h1 className="text-center text-5xl">{sagaData.sagaTitle}</h1>
      <h3 className="text-center text-white/50">
        EPIC: The Musical - Jorge Rivera-Herrans
      </h3>
      {sagaData.songs.map((song) => {
        const isPlaying = playingSong === song.id;
        const showLyrics = songLyrics === song.id;
        return (
          <div
            key={song.id}
            className="flex flex-col min-w-fit my-8 p-8 rounded-2xl bg-slate-300/20 border border-white/80 backdrop-blur-2xl"
          >
            <div>
              <h2 className="text-3xl">{song.title}</h2>
              <div className="flex">
                {song.characters.map((c) => {
                  return (
                    <div
                      key={c}
                      className="rounded-full w-fit px-3 mr-2 my-5 bg-slate-300/20 border border-white/80"
                    >
                      <span>{c}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex">
              <button
                id={`play-${song.id}`}
                className="w-fit mb-5 rounded-2xl px-5 py-3 mr-2 bg-slate-300/20 border border-white/80 hover:cursor-pointer"
                onClick={() => togglePlayingSong(song.id)}
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
              <button
                className="w-fit mb-5 rounded-2xl px-5 py-3 mr-2 bg-slate-300/20 border border-white/80 hover:cursor-pointer"
                onClick={() => toggleLyrics(song.id)}
              >
                {showLyrics ? "⬆ Lyrics" : "⬇ Lyrics"}
              </button>
              <button
                className="w-fit mb-5 rounded-2xl px-5 py-3 bg-slate-300/20 border border-white/80 hover:cursor-pointer"
                onClick={() => toggleFavorite(song)}
              >
                <span>&#9829;</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <iframe
                src={song.video}
                className={`w-100 h-50 lg:h-56 ${
                  isPlaying ? "block" : "hidden"
                }`}
                allowFullScreen
              ></iframe>
              <div
                className={`max-h-100 max-w-fit p-5 overflow-auto ${
                  showLyrics ? "block" : "hidden"
                }`}
              >
                {song.lyrics.map((line, i) => {
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
