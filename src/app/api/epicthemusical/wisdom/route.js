export async function GET() {
  const wisdomSaga = {
    saga: "wisdom",
    sagaTitle: "The Wisdom Saga",
    themeGradient: "from-purple-950 via-indigo-500 to-purple-950",
    songs: [
      {
        id: 1,
        title: "Legendary",
        saga: "The Wisdom Saga",
        characters: ["Telemachus", "Antinous", "Suitors"],
        video: "https://www.youtube.com/embed/nxDH6Dbyhi4?si=CBKTRSFTG1UQrJXs",
      },
      {
        id: 2,
        title: "Little Wolf",
        saga: "The Wisdom Saga",
        characters: ["Telemachus", "Athena", "Antinous", "Suitors"],
        video: "https://www.youtube.com/embed/BPiJF7rceiA?si=nmnCVGpSqeN50S1C",
      },
      {
        id: 3,
        title: "We'll Be Fine",
        saga: "The Wisdom Saga",
        characters: ["Telemachus", "Athena"],
        video: "https://www.youtube.com/embed/DR26QjyF__g?si=VrHWbKeh_2UqAgyv",
      },
      {
        id: 4,
        title: "Love In Paradise",
        saga: "The Wisdom Saga",
        characters: ["Athena", "Odysseus", "Calypso", "Odysseus' Dead Men"],
        video: "https://www.youtube.com/embed/lpVWEq_wIrs?si=bKdorN4JE_NeIdi3",
      },
      {
        id: 5,
        title: "God Games",
        saga: "The Wisdom Saga",
        characters: [
          "Athena",
          "Zeus",
          "Apollo",
          "Hephaestus",
          "Aphrodite",
          "Ares",
          "Hera",
        ],
        video: "https://www.youtube.com/embed/dA8R3XNdXjQ?si=ENAe-CuVw4tNKDv3",
      },
    ],
  };

  return new Response(JSON.stringify(wisdomSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
