export async function GET() {
  const cyclopsSaga = {
    saga: "cyclops",
    sagaTitle: "The Cyclops Saga",
    themeGradient: "from-black via-red-700 to-black",
    songs: [
      {
        id: 1,
        title: "Polyphemus",
        saga: "The Cyclops Saga",
        characters: ["Odysseus", "Eurylochus", "Polyphemus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/nDQyFHmuQls?si=8wHXNoSFfITQpGMK",
      },
      {
        id: 2,
        title: "Survive",
        saga: "The Cyclops Saga",
        characters: ["Odysseus", "Eurylochus", "Polyphemus", "Odysseus' Crew"],
        video: "https://www.youtube.com/embed/rND9-qeA7Lo?si=A-Gjd8osxiR_WxK-",
      },
      {
        id: 3,
        title: "Remember Them",
        saga: "The Cyclops Saga",
        characters: [
          "Odysseus",
          "Eurylochus",
          "Polyphemus",
          "Athena",
          "Odysseus' Crew",
        ],
        video: "https://www.youtube.com/embed/NGxrhdgAg18?si=MDWP3apovETu2p7B",
      },
      {
        id: 4,
        title: "My Goodbye",
        saga: "The Cyclops Saga",
        characters: ["Odysseus", "Athena"],
        video: "https://www.youtube.com/embed/xrFaGilus6o?si=5BZpQKaYWT_7BS_V",
      },
    ],
  };

  return new Response(JSON.stringify(cyclopsSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
