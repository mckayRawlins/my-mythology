export async function GET() {
  const underworldSaga = {
    saga: "underworld",
    sagaTitle: "The Underworld Saga",
    themeGradient: "from-emerald-950 via-slate-500 to-emerald-950",
    songs: [
      {
        id: 1,
        title: "The Underworld",
        saga: "The Underworld Saga",
        characters: [
          "Odysseus",
          "Polites",
          "Anticlea",
          "Odysseus' Crew",
          "Odysseus' Dead Men",
        ],
        video: "https://www.youtube.com/embed/cyqul8pKHko?si=6Mg8jsNy_gklqdhE",
      },
      {
        id: 2,
        title: "No Longer You",
        saga: "The Underworld Saga",
        characters: ["Odysseus", "Tiresias"],
        video: "https://www.youtube.com/embed/BZ8qL5P270Q?si=mlAFUhRvk9aoqIx_",
      },
      {
        id: 3,
        title: "Monster",
        saga: "The Underworld Saga",
        characters: ["Odysseus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/qYDms9Z-02A?si=E_XJmeJVm2kReO30",
      },
    ],
  };

  return new Response(JSON.stringify(underworldSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
