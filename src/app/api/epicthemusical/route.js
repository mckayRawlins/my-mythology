export async function GET() {
  const epic = {
    results: [
      {
        id: "troy",
        title: "The Troy Saga",
        songCount: 5,
        icon: "⚔️",
        theme: "from-sky-400 to-red-500", // Changed from sky-950
        description:
          "Odysseus fights in the Trojan War, facing fate, gods, and his own ambition. This saga sets the tone for his epic journey home.",
      },
      {
        id: "cyclops",
        title: "The Cyclops Saga",
        songCount: 4,
        icon: "👁️",
        theme: "from-gray-400 to-red-600", // Changed from black
        description:
          "Trapped in the cave of Polyphemus, Odysseus must outwit the monstrous cyclops to survive and escape.",
      },
      {
        id: "ocean",
        title: "The Ocean Saga",
        songCount: 4,
        icon: "🌊",
        theme: "from-sky-400 to-sky-600", // Changed from sky-950
        description:
          "Odysseus and his crew navigate treacherous waters and impossible choices as they fight to stay on course.",
      },
      {
        id: "circe",
        title: "The Circe Saga",
        songCount: 4,
        icon: "💎",
        theme: "from-purple-400 to-pink-500", // Changed from purple-900
        description:
          "Odysseus encounters the sorceress Circe, who tests his will and tempts him to stay in her enchanted world.",
      },
      {
        id: "underworld",
        title: "The Underworld Saga",
        songCount: 3,
        icon: "☠️",
        theme: "from-emerald-400 to-slate-400", // Changed from emerald-950
        description:
          "In search of guidance, Odysseus ventures into the land of the dead to speak with spirits and confront haunting truths.",
      },
      {
        id: "thunder",
        title: "The Thunder Saga",
        songCount: 5,
        icon: "⚡",
        theme: "from-yellow-400 to-yellow-600", // Changed from black
        description:
          "Odysseus makes some disastrous decisions that lead to the betrayal of his crew and the wrath of mighty thunder god Zeus.",
      },
      {
        id: "wisdom",
        title: "The Wisdom Saga",
        songCount: 5,
        icon: "⌛",
        theme: "from-purple-400 to-indigo-500", // Changed from purple-950
        description: "TBD",
      },
      {
        id: "vengence",
        title: "The Vegence Saga",
        songCount: 5,
        icon: "🔱",
        theme: "from-cyan-400 to-cyan-600", // Changed from cyan-950
        description: "TBD",
      },
      {
        id: "ithaca",
        title: "The Ithaca Saga",
        songCount: 5,
        icon: "🏛️",
        theme: "from-orange-400 to-red-700", // Changed from black
        description: "TBD",
      },
    ],
  };

  return new Response(JSON.stringify(epic), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
