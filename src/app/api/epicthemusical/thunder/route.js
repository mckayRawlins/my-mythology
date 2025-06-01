export async function GET() {
  const thunderSaga = {
    saga: "thunder",
    sagaTitle: "The Thunder Saga",
    themeGradient: "from-black via-yellow-600 to-black",
    songs: [
      {
        id: 1,
        title: "Suffering",
        saga: "The Thunder Saga",
        characters: ["Odysseus", "Sirens"],
        video: "https://www.youtube.com/embed/3Vo0KbqRB5k?si=-H0oXiyhW4Z_3hlH",
      },
      {
        id: 2,
        title: "Different Beast",
        saga: "The Thunder Saga",
        characters: ["Odysseus", "Sirens", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/6sDviM1VPa0?si=mRYm-NBJG06W8rCg",
      },
      {
        id: 3,
        title: "Scylla",
        saga: "The Thunder Saga",
        characters: ["Odysseus", "Eurylochus", "Scylla", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/aPxjbWbhyPc?si=Dog4EP-zmw0NyF6J",
      },
      {
        id: 4,
        title: "Mutiny",
        saga: "The Thunder Saga",
        characters: ["Odysseus", "Eurylochus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/x_xJEfDB7y0?si=rsxcuVNgmz7pUDHm",
      },
      {
        id: 5,
        title: "Thunder Bringer",
        saga: "The Thunder Saga",
        characters: ["Odysseus", "Zeus", "Eurylochus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/MWjmMKCEwrA?si=4Ht4t3RulG4WPFkk",
      },
    ],
  };

  return new Response(JSON.stringify(thunderSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
