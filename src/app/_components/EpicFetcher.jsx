"use client";

import { useEffect, useState } from "react";

export default function EpicFetcher() {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!sagaData) {
    return <div>No data avaliable</div>;
  }

  return (
    <div>
      {sagaData.map((saga) => {
        return <h1 key={saga.id}>{saga.title}</h1>;
      })}
    </div>
  );
}
