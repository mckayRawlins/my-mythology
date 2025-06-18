"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MythLinkCard from "./MythLinkCard";

export default function DisplaySagas() {
  const [sagaData, setSagaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpicData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("http://localhost:3000/api/epicthemusical");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const epicData = data.results;
        setSagaData(epicData);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col w-[100%]">
        <div className="mx-auto mt-15 p-10 rounded-2xl w-[80%] bg-gradient-to-r from-gray-900/50 to-gray-800/50 animate-spin"></div>
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
    <div className="flex flex-col font-serif">
      {sagaData.map((saga) => {
        return (
          <div
            key={saga.id}
            className={`mx-auto mt-15 p-10 rounded-2xl w-[80%] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900/50`}
          >
            <MythLinkCard
              icon={saga.icon}
              title={saga.title}
              href={`http://localhost:3000/epic/${saga.id}`}
              gradient={saga.theme}
              description={saga.description}
              id={saga.id}
            />
          </div>
        );
      })}
    </div>
  );
}
