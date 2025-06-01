export async function GET() {
  const vengenceSaga = {
    saga: "vengence",
    sagaTitle: "The Vengence Saga",
    themeGradient: "from-cyan-950 via-cyan-500 to-cyan-950",
    songs: [
      {
        id: 1,
        title: "Not Sorry For Loving You",
        saga: "The Vengence Saga",
        characters: ["Calypso", "Odysseus"],
        video: "https://www.youtube.com/embed/7M3gzo-hSCo?si=x1y5F2lOa2paoJ80",
      },
      {
        id: 2,
        title: "Dangerous",
        saga: "The Vengence Saga",
        characters: ["Odysseus", "Hermes"],
        video: "https://www.youtube.com/embed/zJhJ5E1hK2A?si=KGzBqV0HfP1c_gAB",
      },
      {
        id: 3,
        title: "Charybdis",
        saga: "The Vengence Saga",
        characters: ["Odysseus"],
        video: "https://www.youtube.com/embed/4n0U1Erga90?si=dVjYsOjvFtYLkx9F",
      },
      {
        id: 4,
        title: "Get in the Water",
        saga: "The Vengence Saga",
        characters: ["Odysseus", "Poseidon"],
        video: "https://www.youtube.com/embed/8njnTRKGdYw?si=6TY3Ce23u6_YGSOF",
      },
      {
        id: 5,
        title: "Six Hundred Strike",
        saga: "The Vengence Saga",
        characters: ["Odysseus", "Poseidon"],
        video: "https://www.youtube.com/embed/zov6NXIAuow?si=GlWHKplpddTS2l0p",
      },
    ],
  };

  return new Response(JSON.stringify(vengenceSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
