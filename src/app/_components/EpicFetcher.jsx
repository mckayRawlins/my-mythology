"use client";

import Link from "next/link";
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
        const res = await fetch(
          "http://calculator-mx2q.onrender.com/api/epicthemusical"
        );
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
    <div className="h-auto w-fit mx-auto relative">
      <Link href="http://localhost:3000/epic/vengence">
        <div
          className="w-74 h-80 mx-auto absolute top-0 left-0 flex justify-center items-center"
          style={{
            clipPath: "polygon(0% 0%, 0% 76%, 80% 100%, 100% 62%, 70% 0%)",
            backgroundImage: "url(https://i.redd.it/bjlw2jje97wd1.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "vengence")[0].title}
          </span>
        </div>
      </Link>

      <Link href="http://localhost:3000/epic/troy">
        <div
          className="w-80 h-50 z-100 bg-blue-500 mx-auto flex justify-center items-center"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%)",
            backgroundImage:
              "url(https://i.pinimg.com/736x/05/9b/e0/059be0bf1b2f1a1fbefd230bf88e7ff2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "troy")[0].title}
          </span>
        </div>
      </Link>

      <Link href="http://localhost:3000/epic/cyclops">
        <div
          className="w-74 h-80 bg-orange-500 mx-auto absolute top-0 right-0 flex justify-center items-center"
          style={{
            clipPath: "polygon(100% 0%, 100% 76%, 20% 100%, 0% 62%,30% 0%)",
            backgroundImage:
              "url(https://i.redd.it/i-am-back-did-ya-miss-me-soooo-todays-is-3-all-together-cuz-v0-59f1d8feabid1.png?width=1366&format=png&auto=webp&s=97ed4072fa7f529b9ab49030ebd124fe8161d9c6)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "cyclops")[0].title}
          </span>
        </div>
      </Link>

      <div className="flex justify-center items-center">
        <Link href="http://localhost:3000/epic/wisdom">
          <div
            className="w-50 h-80 bg-purple-500 mx-auto"
            style={{
              clipPath: "polygon(0% 0%, 0% 100%, 100% 70%, 100% 30%)",
              backgroundImage: "url(https://i.redd.it/vxutxly4rold1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
              {sagaData.filter((data) => data.id === "wisdom")[0].title}
            </span>
          </div>
        </Link>

        <Link href="http://localhost:3000/epic/ithaca">
          <div
            className="w-80 h-80 flex justify-center items-center"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              backgroundImage: `url(https://i.redd.it/d39pw4mjms9e1.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
              {sagaData.filter((data) => data.id === "ithaca")[0].title}
            </span>
          </div>
        </Link>

        <Link href="http://localhost:3000/epic/ocean">
          <div
            className="w-50 h-80 bg-green-500 mx-auto"
            style={{
              clipPath: "polygon(100% 0%, 100% 100%, 0% 70%, 0% 30%)", //top, right, bottom, left
              backgroundImage:
                "url(https://preview.redd.it/epic-subreddit-give-me-the-ocean-saga-cover-without-the-v0-m2bkoq597rsd1.jpeg?width=720&format=pjpg&auto=webp&s=b58928f634bc46c386c12771cb82c40456231051)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
              {sagaData.filter((data) => data.id === "ocean")[0].title}
            </span>
          </div>
        </Link>
      </div>

      <Link href="http://localhost:3000/epic/thunder">
        <div
          className="w-74 h-80 bg-yellow-500 mx-auto absolute bottom-0 left-0"
          style={{
            clipPath: "polygon(0% 100%, 0% 35%, 68% 6%, 100% 37.4%, 70% 100%)",
            backgroundImage:
              "url(https://preview.redd.it/i-am-back-did-ya-miss-me-soooo-todays-is-3-all-together-cuz-v0-3h1z3ffeabid1.png?width=640&crop=smart&auto=webp&s=0c918aa419a094f6ef76411c3a99a8b3fdb0c3ae)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "thunder")[0].title}
          </span>
        </div>
      </Link>

      <Link href="http://localhost:3000/epic/underworld">
        <div
          className="w-80 h-50 bg-blue-500 mx-auto"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 70% 0%, 30% 0%",
            backgroundImage: "url(https://i.redd.it/jcnngvy6ygzc1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "underworld")[0].title}
          </span>
        </div>
      </Link>

      <Link href="http://localhost:3000/epic/circe">
        <div
          className="w-74 h-80 bg-orange-500 mx-auto absolute bottom-0 right-0"
          style={{
            clipPath: "polygon(100% 100%, 100% 35%, 32% 8%, 0% 38%, 30% 100%)",
            backgroundImage:
              "url(https://preview.redd.it/3rd-in-a-series-of-posts-making-my-own-epic-phone-v0-m74089nrg2yc1.png?width=640&crop=smart&auto=webp&s=6a88c8c6f805382e172cb7d4287e0497025b207c)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-transparent flex justify-center items-center w-[100%] h-[100%] hover:bg-slate-800/50 hover:text-white">
            {sagaData.filter((data) => data.id === "circe")[0].title}
          </span>
        </div>
      </Link>
    </div>
  );
}
