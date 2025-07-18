"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MythFetcher({ myth }) {
  const [mythData, setMythData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMyths = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://calculator-mx2q.onrender.com/api/${myth}` ||
            `http://localhost:3000/api/${myth}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data.results.sort());
        setMythData(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMyths();
  }, [myth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!mythData || !mythData.results) {
    return <div>No data avaliable</div>;
  }

  const sortedMyths = mythData.results.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <div className="flex flex-col">
      {sortedMyths.map((mythItem, index) => {
        return (
          <Link
            key={index}
            href={`/myths/${myth}/${mythItem.name.toLowerCase()}`}
            className="group border w-[50%] mx-auto py-10 my-5 rounded-2xl"
          >
            <div className="text-center text-2xl">
              <p>{mythItem.name}</p>
              <p className="text-sm text-gray-400 opacity-0 transition-opacity duration-600 group-hover:opacity-100">
                {mythItem.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
