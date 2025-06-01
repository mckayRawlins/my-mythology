export async function GET() {
  const oceanSaga = {
    saga: "ocean",
    sagaTitle: "The Ocean Saga",
    themeGradient: "from-sky-950 via-sky-700 to-sky-950",
    songs: [
      {
        id: 1,
        title: "Storm",
        saga: "The Ocean Saga",
        characters: ["Odysseus", "Eurylochus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/sRntPU_s-gI?si=r7n6BivOn3HH7UUM",
        lyrics: [],
      },
      {
        id: 2,
        title: "Luck Runs Out",
        saga: "The Ocean Saga",
        characters: ["Odysseus", "Eurylochus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/ZxQHl2fVJ-s?si=32MT6wCjH6rSZAFn",
        lyrics: [],
      },
      {
        id: 3,
        title: "Keep Your Friends Close",
        saga: "The Ocean Saga",
        characters: [
          "Odysseus",
          "Aeolus",
          "Eurylochus",
          "Poseidon",
          "Odysseus' Crew",
        ],
        video: "https://www.youtube.com/embed/UGYny6uI2bA?si=VT33iax7207vQZaZ",
        lyrics: [],
      },
      {
        id: 4,
        title: "Ruthlessness",
        saga: "The Ocean Saga",
        characters: ["Odysseus", "Poseidon", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/skVSbITX4kY?si=jExLWAF2N8KhN5cE",
        lyrics: [],
      },
    ],
  };

  return new Response(JSON.stringify(oceanSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
