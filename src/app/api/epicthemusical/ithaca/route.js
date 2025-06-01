export async function GET() {
  const ithacaSaga = {
    saga: "ithaca",
    sagaTitle: "The Ithaca Saga",
    themeGradient: "from-black via-red-800 to-black",
    songs: [
      {
        id: 1,
        title: "The Challenge",
        saga: "The Ithaca Saga",
        characters: ["Penelope", "Suitors"],
        video: "https://www.youtube.com/embed/Bb6ssHUxrNk?si=u_B7ow2b80rhawR5",
        lyrics: [],
      },
      {
        id: 2,
        title: "Hold Them Down",
        saga: "The Ithaca Saga",
        characters: ["Antonius", "Suitors"],
        video: "https://www.youtube.com/embed/oeDDZNKHOVo?si=2XfqiUlR93uqC4Rx",
        lyrics: [],
      },
      {
        id: 3,
        title: "Odysseus",
        saga: "The Ithaca Saga",
        characters: ["Odysseus", "Telemachus", "Suitors"],
        video: "https://www.youtube.com/embed/TBfp__LH554?si=Qzoi0q0nTWLuLT6g",
        lyrics: [],
      },
      {
        id: 4,
        title: "I Can't Help But Wonder",
        saga: "The Ithaca Saga",
        characters: ["Odysseus", "Telemachus", "Athena"],
        video: "https://www.youtube.com/embed/FBfT0E6oF6I?si=3u7tNNOqHu9Mrct2",
        lyrics: [],
      },
      {
        id: 5,
        title: "Would You Fall In Love With Me Again",
        saga: "The Ithaca Saga",
        characters: ["Odysseus", "Penelope"],
        video: "https://www.youtube.com/embed/rF5tJ8xuaIc?si=G46GQuOaf30N92BW",
        lyrics: [],
      },
    ],
  };

  return new Response(JSON.stringify(ithacaSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
