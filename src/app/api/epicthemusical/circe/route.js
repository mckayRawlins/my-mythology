export async function GET() {
  const circeSaga = {
    saga: "circe",
    sagaTitle: "The Circe Saga",
    themeGradient: "from-purple-900 via-pink-500 to-purple-900",
    songs: [
      {
        id: 1,
        title: "Puppeteer",
        saga: "The Circe Saga",
        characters: ["Odysseus", "Eurylochus", "Circe"],
        video: "https://www.youtube.com/embed/tso8nSWnENM?si=WTrmBWIVBhovnib5",
      },
      {
        id: 2,
        title: "Wouldn't You Like",
        saga: "The Circe Saga",
        characters: ["Odysseus", "Hermes"],
        video: "https://www.youtube.com/embed/xkIBM71E0_w?si=5C25UXj2DHffe2QL",
      },
      {
        id: 3,
        title: "Done For",
        saga: "The Circe Saga",
        characters: ["Odysseus", "Circe"],
        video: "https://www.youtube.com/embed/km6NITbLVHc?si=2jQE6lfgQASPlBHY",
      },
      {
        id: 4,
        title: "There Are Other Ways",
        saga: "The Circe Saga",
        characters: ["Odysseus", "Circe"],
        video: "https://www.youtube.com/embed/NM_Kg0I29Bs?si=4X-UhYvCJgmKmvqT",
      },
    ],
  };

  return new Response(JSON.stringify(circeSaga), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
