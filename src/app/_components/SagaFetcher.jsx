"use client";

import { useEffect, useState } from "react";

export default function SagaFetcher({ sagaId }) {
  const [sagaData, setSagaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songLyrics, setSongLyrics] = useState(new Set());
  const [playingSong, setPlayingSong] = useState(null);
  useEffect(() => {
    const fetchEpicData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `http://localhost:3000/api/epicthemusical/${sagaId}`
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!sagaData) {
    return <div>No data avaliable</div>;
  }

  return (
    <div
      className={`text-white p-10 min-h-screen bg-gradient-to-br ${sagaData.themeGradient}`}
    >
      <h1>{sagaData.sagaTitle}</h1>
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
                className="w-fit mb-5 rounded-2xl px-5 py-3 mr-2 bg-slate-300/20 border border-white/80"
                onClick={() => togglePlayingSong(song.id)}
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
              <button
                className="w-fit mb-5 rounded-2xl px-5 py-3 bg-slate-300/20 border border-white/80"
                onClick={() => toggleLyrics(song.id)}
              >
                {showLyrics ? "⬆ Collapse" : "⬇ Expand"}
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
