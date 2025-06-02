export async function GET() {
  const epic = {
    results: [
      {
        id: "troy",
        title: "The Troy Saga",
        songCount: 5,
      },
      {
        id: "cyclops",
        title: "The Cyclops Saga",
        songCount: 4,
      },
      {
        id: "ocean",
        title: "The Ocean Saga",
        songCount: 4,
      },
      {
        id: "circe",
        title: "The Circe Saga",
        songCount: 4,
      },
      {
        id: "underworld",
        title: "The Underworld Saga",
        songCount: 3,
      },
      {
        id: "thunder",
        title: "The Thunder Saga",
        songCount: 5,
      },
      {
        id: "wisdom",
        title: "The Wisdom Saga",
        songCount: 5,
      },
      {
        id: "vengence",
        title: "The Vegence Saga",
        songCount: 5,
      },
      {
        id: "ithaca",
        title: "The Ithaca Saga",
        songCount: 5,
      },
    ],
  };

  return new Response(JSON.stringify(epic), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
