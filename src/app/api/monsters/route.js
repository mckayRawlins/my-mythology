export async function GET() {
  const monsters = {
    results: [
      {
        name: "Typhon",
        description:
          "Monstrous offspring of Gaia and Tartarus. Father of many famous monsters.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Gaia and Tartarus",
          symbols: ["Serpentine body", "Fire-breathing"],
          abode: "Mount Etna (imprisoned)",
          powers: ["Cataclysmic strength", "Storms and volcanic eruptions"],
          family: {
            parents: ["Gaia", "Tartarus"],
            siblings: ["None"],
            spouse: ["Echidna"],
          },
          stories: ["Battle with Zeus", "Imprisonment under Mount Etna"],
        },
        image: "https://example.com/typhon.jpg",
        id: 1,
      },
      {
        name: "Cerberus",
        description: "Guardian of the underworld, a three-headed hound.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Echidna and Typhon",
          symbols: ["Three heads", "Snake tail"],
          abode: "Underworld (Hades)",
          powers: ["Guardian of the dead", "Prevents living from entering"],
          family: {
            parents: ["Echidna", "Typhon"],
            siblings: ["Orthrus", "Chimera", "Hydra"],
            spouse: ["None"],
          },
          stories: ["Capture by Heracles", "Role in Hades' realm"],
        },
        image: "https://example.com/cerberus.jpg",
        id: 2,
      },
      {
        name: "Medusa",
        description:
          "One of the Gorgons, with snakes for hair and the ability to turn people to stone with her gaze.",
        category: "Monster",
        attributes: {
          origin: "Daughter of Phorcys and Ceto",
          symbols: ["Snake hair", "Gorgon mask"],
          abode: "Cave in Libya",
          powers: ["Petrifying gaze", "Immortality until slain"],
          family: {
            parents: ["Phorcys", "Ceto"],
            siblings: ["Stheno", "Euryale"],
            spouse: ["None"],
          },
          stories: ["Death by Perseus", "Birth of Pegasus and Chrysaor"],
        },
        image: "https://example.com/medusa.jpg",
        id: 3,
      },
      {
        name: "Chimera",
        description:
          "Fire-breathing hybrid creature with the body of a lion, the head of a goat arising from its back, and a tail that ended in a snake's head.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna",
          symbols: ["Lion body", "Goat head", "Snake tail"],
          abode: "Lycia in Asia Minor",
          powers: ["Fire breath", "Composite form"],
          family: {
            parents: ["Typhon", "Echidna"],
            siblings: ["Cerberus", "Orthrus", "Hydra"],
            spouse: ["None"],
          },
          stories: ["Defeated by Bellerophon", "Heraldry of ancient Lycia"],
        },
        image: "https://example.com/chimera.jpg",
        id: 4,
      },
      {
        name: "Scylla",
        description:
          "A sea monster with twelve dog-heads and six snake-like lower bodies, who lived on one side of a narrow channel opposite her counterpart Charybdis.",
        category: "Monster",
        attributes: {
          origin: "Nymph cursed by Circe",
          symbols: ["Dog heads", "Snake tails"],
          abode: "Straits of Messina",
          powers: [
            "Snatching sailors from passing ships",
            "Terrorizing the seas",
          ],
          family: {
            parents: ["Phorcys", "Ceto", "Crataeis"],
            siblings: ["Various sea monsters"],
            spouse: ["None"],
          },
          stories: ["Transformation by Circe", "Encounter with Odysseus"],
        },
        image: "https://example.com/scylla.jpg",
        id: 5,
      },
      {
        name: "Cyclops",
        description:
          "Giant creatures with a single eye in the middle of their forehead, known for their forging abilities and association with the god Hephaestus.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Uranus and Gaia or Poseidon and Amphitrite",
          symbols: ["Single eye", "Massive size"],
          abode: "Various caves in Sicily and Greece",
          powers: ["Craftsmanship", "Strength"],
          family: {
            parents: ["Poseidon", "Amphitrite"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Imprisonment of Odysseus",
            "Encounter with Jason and the Argonauts",
          ],
        },
        image: "https://example.com/cyclops.jpg",
        id: 6,
      },
      {
        name: "Minotaur",
        description:
          "Half-man, half-bull creature imprisoned in the Labyrinth of Crete, offspring of PasiphaÃ« and the Cretan Bull.",
        category: "Monster",
        attributes: {
          origin: "Offspring of PasiphaÃ« and the Cretan Bull",
          symbols: ["Bull head", "Human body"],
          abode: "Labyrinth of Crete",
          powers: ["Maze navigation", "Strength and ferocity"],
          family: {
            parents: ["PasiphaÃ«", "Cretan Bull"],
            siblings: ["Ariadne", "Deucalion"],
            spouse: ["None"],
          },
          stories: ["Defeat by Theseus", "Role in Athenian mythology"],
        },
        image: "https://example.com/minotaur.jpg",
        id: 7,
      },
      {
        name: "Gorgons",
        description:
          "Three monstrous sisters with snakes for hair, whose gaze turned people to stone. Stheno and Euryale were immortal, while Medusa was mortal.",
        category: "Monster",
        attributes: {
          origin: "Daughters of Phorcys and Ceto",
          symbols: ["Snake hair", "Gorgon mask"],
          abode: "Various, including the Gorgades islands",
          powers: ["Petrifying gaze", "Immortality (Stheno and Euryale)"],
          family: {
            parents: ["Phorcys", "Ceto"],
            siblings: ["Echidna", "Ladon", "Typhon"],
            spouse: ["None"],
          },
          stories: ["Encounter with Perseus", "Role in hero mythology"],
        },
        image: "https://example.com/gorgons.jpg",
        id: 8,
      },
      {
        name: "Hydra",
        description:
          "Lernaean serpent with multiple heads, capable of regeneration. One of Heracles' Twelve Labors was to slay it.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna",
          symbols: ["Many heads", "Regenerative ability"],
          abode: "Lerna (swamp near Argos)",
          powers: ["Venomous breath", "Immortality through regrowth"],
          family: {
            parents: ["Typhon", "Echidna"],
            siblings: ["Cerberus", "Chimera", "Orthrus"],
            spouse: ["None"],
          },
          stories: ["Defeat by Heracles", "Immortal challenge"],
        },
        image: "https://example.com/hydra.jpg",
        id: 9,
      },
      {
        name: "Sirens",
        description:
          "Dangerous creatures, portrayed as femmes fatales who lured nearby sailors with their enchanting music and voices to shipwreck on the rocky coast of their island.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Achelous and one of the Muses or Calliope",
          symbols: ["Beautiful women", "Bird feathers"],
          abode: "Sirenum scopuli (Siren Rocks)",
          powers: ["Enchanting song", "Shipwreck allure"],
          family: {
            parents: ["Achelous", "Melpomene or Calliope"],
            siblings: ["Muses", "Thelxiepeia", "Peisinoe", "Aglaope"],
            spouse: ["None"],
          },
          stories: ["Challenge to Odysseus", "Role in ancient navigation"],
        },
        image: "https://example.com/sirens.jpg",
        id: 10,
      },
      {
        name: "Geryon",
        description:
          "Three-bodied giant, master of a fabulous herd of red cattle of Geryon in the far west of the Mediterranean.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Chrysaor and Callirhoe",
          symbols: ["Three bodies", "Herdsman's staff"],
          abode: "Erytheia (modern-day Cadiz, Spain)",
          powers: ["Control over cattle", "Triplet form"],
          family: {
            parents: ["Chrysaor", "Callirhoe"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Defeat by Heracles", "Labor to retrieve cattle"],
        },
        image: "https://example.com/geryon.jpg",
        id: 11,
      },
      {
        name: "Harpy",
        description:
          "Half-woman, half-bird creatures known for stealing food and punishing the guilty.",
        category: "Monster",
        attributes: {
          origin: "Wind spirits associated with storm winds",
          symbols: ["Bird wings", "Talons"],
          abode: "Cliffside dens, often in Crete",
          powers: ["Swift flight", "Punishment of wrongdoers"],
          family: {
            parents: ["Electra", "Thaumas"],
            siblings: ["Iris", "Achelous", "Aello"],
            spouse: ["None"],
          },
          stories: [
            "Punishment of the blind seer Phineus",
            "Capture of the Trojans",
          ],
        },
        image: "https://example.com/harpy.jpg",
        id: 12,
      },
      {
        name: "Manticore",
        description:
          "Legendary creature with the body of a lion, the face of a human, and the tail of a scorpion.",
        category: "Monster",
        attributes: {
          origin: "Often from Persian mythology, adopted into Greek tales",
          symbols: ["Lion body", "Human face", "Scorpion tail"],
          abode: "Forests or remote locations",
          powers: ["Venomous tail", "Sharp teeth"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Encounter with heroes and travelers", "Mythical warnings"],
        },
        image: "https://example.com/manticore.jpg",
        id: 13,
      },
      {
        name: "Pegasus",
        description:
          "Winged horse born from Medusa's blood when Perseus killed her.",
        category: "Monster",
        attributes: {
          origin: "Born from the blood of Medusa",
          symbols: ["Wings", "Divine speed"],
          abode: "Olympus and heroic quests",
          powers: ["Flight", "Strength and endurance"],
          family: {
            parents: ["Medusa"],
            siblings: ["Chrysaor"],
            spouse: ["None"],
          },
          stories: [
            "Bellerophon's taming and use in battle",
            "Divine associations",
          ],
        },
        image: "https://example.com/pegasus.jpg",
        id: 14,
      },
      {
        name: "Sphinx",
        description:
          "Winged lion with the head of a human, known for her riddles and guarding the city of Thebes.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna or Chimera and Orthrus",
          symbols: ["Lion body", "Human head"],
          abode: "Rocky cliffs outside Thebes",
          powers: ["Riddles", "Threat to travelers"],
          family: {
            parents: ["Typhon", "Echidna", "Chimera", "Orthrus"],
            siblings: ["Cerberus", "Hydra", "Gorgons"],
            spouse: ["None"],
          },
          stories: ["Defeated by Oedipus", "Role in the riddle of the Sphinx"],
        },
        image: "https://example.com/sphinx.jpg",
        id: 15,
      },
      {
        name: "Nemean Lion",
        description:
          "Giant lion with impenetrable golden fur, slain by Heracles as his first labor.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna or Selene and Orthrus",
          symbols: ["Golden fur", "Immunity to weapons"],
          abode: "Nemea",
          powers: ["Invulnerability to weapons", "Terrorization of Nemea"],
          family: {
            parents: ["Typhon", "Echidna", "Selene", "Orthrus"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Defeated by Heracles during the First Labor"],
        },
        image: "https://example.com/nemean-lion.jpg",
        id: 16,
      },
      {
        name: "Orthrus",
        description: "Two-headed dog and brother of Cerberus, owned by Geryon.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Echidna and Typhon",
          symbols: ["Two heads"],
          abode: "Herds of Geryon (Erytheia)",
          powers: ["Guardian of Geryon's cattle", "Vigilance"],
          family: {
            parents: ["Echidna", "Typhon"],
            siblings: ["Cerberus", "Chimera", "Hydra"],
            spouse: ["None"],
          },
          stories: ["Defeated by Heracles during the Tenth Labor"],
        },
        image: "https://example.com/orthrus.jpg",
        id: 17,
      },
      {
        name: "Ladon",
        description:
          "Hundred-headed dragon that guarded the golden apples of immortality in the Garden of the Hesperides.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna",
          symbols: ["Hundred heads", "Serpentine body"],
          abode: "Garden of the Hesperides",
          powers: ["Guardian of the golden apples", "Intricate surveillance"],
          family: {
            parents: ["Typhon", "Echidna"],
            siblings: ["Cerberus", "Hydra", "Chimera"],
            spouse: ["None"],
          },
          stories: ["Defeated by Heracles during the Eleventh Labor"],
        },
        image: "https://example.com/ladon.jpg",
        id: 18,
      },
      {
        name: "Gigantes",
        description:
          "Race of giant beings born from the blood of Uranus after his castration.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Uranus and Gaia",
          symbols: ["Massive size", "Titanic strength"],
          abode: "Earth, particularly Phlegra in Thrace",
          powers: [
            "Resistance to the gods",
            "Formation of islands and mountains",
          ],
          family: {
            parents: ["Uranus", "Gaia"],
            siblings: ["Titans", "Cyclopes", "Hecatoncheires"],
            spouse: ["Varies"],
          },
          stories: ["Battle with the Olympians", "Defeat by the gods"],
        },
        image: "https://example.com/gigantes.jpg",
        id: 19,
      },
      {
        name: "Centaur",
        description:
          "Half-human, half-horse creatures known for their wild and unruly behavior.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Ixion and Nephele or offspring of Centaurus",
          symbols: ["Human torso", "Horse body"],
          abode: "Forests and mountains of Thessaly",
          powers: ["Strength and agility", "Mastery of archery"],
          family: {
            parents: ["Ixion", "Nephele", "Centaurus"],
            siblings: ["Varies"],
            spouse: ["Varies"],
          },
          stories: ["Battle with the Lapiths", "Tutoring of heroes"],
        },
        image: "https://example.com/centaur.jpg",
        id: 20,
      },
      {
        name: "Stymphalian Birds",
        description:
          "Man-eating birds with bronze beaks, sharp metallic feathers, and toxic dung.",
        category: "Monster",
        attributes: {
          origin: "Created by Ares",
          symbols: ["Bronze beaks", "Metallic feathers"],
          abode: "Lake Stymphalia in Arcadia",
          powers: ["Flesh-eating", "Toxic excrement"],
          family: {
            parents: ["Ares"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Sixth Labor of Heracles", "Threat to local populations"],
        },
        image: "https://example.com/stymphalian-birds.jpg",
        id: 21,
      },
      {
        name: "Empusa",
        description:
          "Shape-shifting female monster with a bronze leg and a donkey's foot, known for seducing and devouring travelers.",
        category: "Monster",
        attributes: {
          origin: "Daughter of Hecate",
          symbols: ["Bronze leg", "Donkey's foot"],
          abode: "Crossroads and desolate places",
          powers: ["Shape-shifting", "Seduction"],
          family: {
            parents: ["Hecate"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Encounters with travelers", "Association with Hecate"],
        },
        image: "https://example.com/empusa.jpg",
        id: 22,
      },
      {
        name: "Erymanthian Boar",
        description:
          "Enormous wild boar that terrorized the region around Mount Erymanthos.",
        category: "Monster",
        attributes: {
          origin: "Sacred to Artemis",
          symbols: ["Giant tusks", "Immense size"],
          abode: "Mount Erymanthos",
          powers: ["Incredible strength", "Destructive force"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Fourth Labor of Heracles", "Devastation of Arcadia"],
        },
        image: "https://example.com/erymanthian-boar.jpg",
        id: 23,
      },
      {
        name: "Lamia",
        description:
          "Child-eating daemon, once a beautiful queen of Libya cursed by Hera.",
        category: "Monster",
        attributes: {
          origin: "Cursed by Hera",
          symbols: ["Serpentine lower body", "Ability to remove eyes"],
          abode: "Various, often associated with Africa",
          powers: ["Shape-shifting", "Prophecy"],
          family: {
            parents: ["Poseidon", "Libya"],
            siblings: ["None"],
            spouse: ["Zeus"],
          },
          stories: ["Curse of Hera", "Devourer of children"],
        },
        image: "https://example.com/lamia.jpg",
        id: 24,
      },
      {
        name: "Talos",
        description:
          "Giant bronze automaton that protected Europa in Crete from pirates and invaders.",
        category: "Monster",
        attributes: {
          origin: "Created by Hephaestus",
          symbols: ["Bronze body", "Single vein"],
          abode: "Crete",
          powers: ["Invulnerability", "Superhuman strength"],
          family: {
            parents: ["Hephaestus"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Guardian of Crete", "Defeat by the Argonauts"],
        },
        image: "https://example.com/talos.jpg",
        id: 25,
      },
      {
        name: "Graeae",
        description:
          "Three gray-haired sisters who shared one eye and one tooth among them.",
        category: "Monster",
        attributes: {
          origin: "Daughters of Phorcys and Ceto",
          symbols: ["Shared eye", "Shared tooth"],
          abode: "Cave near the Gorgons",
          powers: ["Foresight", "Guardians of the Gorgons"],
          family: {
            parents: ["Phorcys", "Ceto"],
            siblings: ["Gorgons"],
            spouse: ["None"],
          },
          stories: [
            "Encounter with Perseus",
            "Guardians of the way to the Gorgons",
          ],
        },
        image: "https://example.com/graeae.jpg",
        id: 26,
      },
      {
        name: "Aethon",
        description:
          "Giant eagle sent by Zeus to eat Prometheus' liver as punishment.",
        category: "Monster",
        attributes: {
          origin: "Created by Zeus",
          symbols: ["Giant wings", "Sharp beak"],
          abode: "Caucasus Mountains",
          powers: ["Immortality", "Daily regeneration of Prometheus' liver"],
          family: {
            parents: ["Zeus"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Punishment of Prometheus", "Slain by Heracles"],
        },
        image: "https://example.com/aethon.jpg",
        id: 27,
      },
      {
        name: "Cetus",
        description:
          "Enormous sea monster sent by Poseidon to ravage the kingdom of Ethiopia.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Phorcys and Ceto",
          symbols: ["Serpentine body", "Massive jaws"],
          abode: "Mediterranean Sea",
          powers: ["Control over sea storms", "Immense size"],
          family: {
            parents: ["Phorcys", "Ceto"],
            siblings: ["Echidna", "Gorgons"],
            spouse: ["None"],
          },
          stories: ["Threat to Andromeda", "Slain by Perseus"],
        },
        image: "https://example.com/cetus.jpg",
        id: 28,
      },
      {
        name: "Mormo",
        description:
          "Fearsome female spirit who bit bad children and was used to frighten them into obedience.",
        category: "Monster",
        attributes: {
          origin: "Companion of Hecate",
          symbols: ["Sharp teeth", "Changing form"],
          abode: "Dark places, associated with Hecate",
          powers: ["Shape-shifting", "Instilling fear"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Frightening disobedient children",
            "Association with dark magic",
          ],
        },
        image: "https://example.com/mormo.jpg",
        id: 29,
      },
      {
        name: "Phaea",
        description:
          "The Crommyonian Sow, a wild pig that ravaged the area around Crommyon.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Echidna and Typhon",
          symbols: ["Enormous size", "Destructive nature"],
          abode: "Crommyon",
          powers: ["Immense strength", "Ferocity"],
          family: {
            parents: ["Echidna", "Typhon"],
            siblings: ["Many monsters"],
            spouse: ["None"],
          },
          stories: ["Slain by Theseus", "Terrorized Crommyon"],
        },
        image: "https://example.com/phaea.jpg",
        id: 30,
      },
      {
        name: "Skolopendra",
        description:
          "Gigantic sea monster resembling a centipede, with multiple legs and a voracious appetite.",
        category: "Monster",
        attributes: {
          origin: "Born from the sea",
          symbols: ["Numerous legs", "Elongated body"],
          abode: "Mediterranean Sea",
          powers: ["Ability to devour entire ships", "Underwater agility"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Encounters with sailors", "Threat to maritime travel"],
        },
        image: "https://example.com/skolopendra.jpg",
        id: 31,
      },
      {
        name: "Leucrocotta",
        description:
          "Hybrid beast with the body of a lion, the head of a badger, and cloven hooves.",
        category: "Monster",
        attributes: {
          origin: "Offspring of a hyena and a lioness",
          symbols: ["Lion body", "Badger head", "Cloven hooves"],
          abode: "India or Ethiopia",
          powers: ["Mimicry of human voices", "Speed"],
          family: {
            parents: ["Hyena", "Lioness"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Luring humans with voice mimicry",
            "Encounters with travelers",
          ],
        },
        image: "https://example.com/leucrocotta.jpg",
        id: 32,
      },
      {
        name: "Pyrausta",
        description:
          "Small, four-legged winged creature that lived in fire and died if it flew too far from it.",
        category: "Monster",
        attributes: {
          origin: "Born in fire",
          symbols: ["Wings", "Fiery habitat"],
          abode: "Copper smelting furnaces of Cyprus",
          powers: ["Fire resistance", "Flight"],
          family: {
            parents: ["Fire itself"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Living in fire",
            "Symbol of passionate but short-lived existence",
          ],
        },
        image: "https://example.com/pyrausta.jpg",
        id: 33,
      },
      {
        name: "Karkinos",
        description:
          "Giant crab that fought alongside the Hydra against Heracles.",
        category: "Monster",
        attributes: {
          origin: "Sent by Hera",
          symbols: ["Giant pincers", "Hard shell"],
          abode: "Lerna",
          powers: ["Crushing strength", "Aquatic agility"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Battle with Heracles", "Placed among the stars as Cancer"],
        },
        image: "https://example.com/karkinos.jpg",
        id: 34,
      },
      {
        name: "Ophiotaurus",
        description:
          "Creature with the front of a bull and the rear of a serpent, whose entrails granted the power to defeat the gods.",
        category: "Monster",
        attributes: {
          origin: "Born during the Titanomachy",
          symbols: ["Bull head", "Serpent tail"],
          abode: "Various",
          powers: ["Prophecy", "Potential to overthrow gods"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Sought after during wars with the gods",
            "Killed by allies of the Olympians",
          ],
        },
        image: "https://example.com/ophiotaurus.jpg",
        id: 35,
      },
      {
        name: "Taraxippus",
        description:
          "Ghost or spirit that frightened horses at hippodromes, causing them to panic during races.",
        category: "Monster",
        attributes: {
          origin: "Various, including ghosts of dead heroes",
          symbols: ["Invisible presence", "Horse panic"],
          abode: "Hippodromes and racetracks",
          powers: ["Inducing fear in horses", "Invisibility"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Disruption of chariot races",
            "Appeasement through sacrifices",
          ],
        },
        image: "https://example.com/taraxippus.jpg",
        id: 36,
      },
      {
        name: "Teumessian Fox",
        description:
          "Gigantic fox destined never to be caught, sent by the gods to punish the city of Thebes.",
        category: "Monster",
        attributes: {
          origin: "Created by the gods",
          symbols: ["Uncatchable speed", "Fox form"],
          abode: "Teumessus",
          powers: ["Supernatural speed", "Evasion"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Hunted by Laelaps", "Both turned to stone by Zeus"],
        },
        image: "https://example.com/teumessian-fox.jpg",
        id: 37,
      },
      {
        name: "Aspidochelone",
        description:
          "A massive sea creature resembling an island, luring sailors to their doom.",
        category: "Monster",
        attributes: {
          origin: "Born from the depths of the sea",
          symbols: ["Island-like back", "Deceptive stillness"],
          abode: "Open seas",
          powers: ["Mimicry of land", "Ability to submerge with trapped prey"],
          family: {
            parents: ["Poseidon", "Ancient sea spirit"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Deception of seafarers", "Encounters with heroes at sea"],
        },
        image: "https://example.com/aspidochelone.jpg",
        id: 38,
      },
      {
        name: "Ichthyocentaurs",
        description:
          "Sea-dwelling creatures with the upper body of a human, the lower front of a horse, and the tail of a fish.",
        category: "Monster",
        attributes: {
          origin: "Children of Poseidon and a sea nymph",
          symbols: ["Fish tail", "Horse legs", "Human torso"],
          abode: "Mediterranean Sea",
          powers: ["Control over sea creatures", "Weather manipulation"],
          family: {
            parents: ["Poseidon", "Sea nymph"],
            siblings: ["Tritons"],
            spouse: ["Various sea nymphs"],
          },
          stories: [
            "Guardians of Aphrodite",
            "Rescuers of shipwrecked sailors",
          ],
        },
        image: "https://example.com/ichthyocentaurs.jpg",
        id: 39,
      },
      {
        name: "Campe",
        description:
          "Draconic monster with a woman's head and torso, the lower body of a dragon, and various animal heads around her waist.",
        category: "Monster",
        attributes: {
          origin: "Created by Tartarus",
          symbols: ["Multiple animal heads", "Dragon body"],
          abode: "Tartarus",
          powers: ["Poisonous breath", "Superhuman strength"],
          family: {
            parents: ["Tartarus", "Gaia"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Guardian of the Cyclopes and Hecatoncheires",
            "Slain by Zeus",
          ],
        },
        image: "https://example.com/campe.jpg",
        id: 40,
      },
      {
        name: "Hippalectryon",
        description:
          "Hybrid creature with the front half of a horse and the rear of a rooster.",
        category: "Monster",
        attributes: {
          origin: "Created by Ares",
          symbols: ["Horse head", "Rooster tail"],
          abode: "Fields of war",
          powers: ["Swift running", "Loud, intimidating cry"],
          family: {
            parents: ["Ares", "Unknown mare"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Herald of war", "Mount of minor war deities"],
        },
        image: "https://example.com/hippalectryon.jpg",
        id: 41,
      },
      {
        name: "Odontotyrannos",
        description:
          "Massive beast with elephant-like tusks and a voracious appetite for human flesh.",
        category: "Monster",
        attributes: {
          origin: "Spawned in the wilds of India",
          symbols: ["Enormous tusks", "Man-eating maw"],
          abode: "Remote forests of the East",
          powers: ["Impenetrable hide", "Insatiable hunger"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Terror of distant lands", "Hunted by brave heroes"],
        },
        image: "https://example.com/odontotyrannos.jpg",
        id: 42,
      },
      {
        name: "Crocotta",
        description:
          "A mythical dog-wolf of India, said to imitate human voices to lure prey.",
        category: "Monster",
        attributes: {
          origin: "Born from a wolf and a dog",
          symbols: ["Mane of a lion", "Jaws of incredible strength"],
          abode: "Forests of India",
          powers: ["Voice mimicry", "Crushing bones with ease"],
          family: {
            parents: ["Wolf", "Dog"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Luring humans with familiar voices", "Eluding hunters"],
        },
        image: "https://example.com/crocotta.jpg",
        id: 43,
      },
      {
        name: "Cercopes",
        description:
          "Mischievous forest creatures known for their thieving and deceitful nature.",
        category: "Monster",
        attributes: {
          origin: "Sons of Oceanus and Theia",
          symbols: ["Monkey-like appearance", "Trickster grins"],
          abode: "Forests of Lydia",
          powers: ["Shape-shifting", "Cunning trickery"],
          family: {
            parents: ["Oceanus", "Theia"],
            siblings: ["Various nymphs"],
            spouse: ["None"],
          },
          stories: [
            "Attempt to steal from Heracles",
            "Transformed into monkeys by Zeus",
          ],
        },
        image: "https://example.com/cercopes.jpg",
        id: 44,
      },
      {
        name: "Cecrops",
        description: "Mythical first king of Athens, half-man and half-snake.",
        category: "Monster",
        attributes: {
          origin: "Born from the earth",
          symbols: ["Snake lower body", "Human upper body"],
          abode: "Athens",
          powers: ["Wisdom", "Prophetic abilities"],
          family: {
            parents: ["Gaia"],
            siblings: ["None"],
            spouse: ["Aglaurus"],
          },
          stories: [
            "Founding of Athens",
            "Judgment between Athena and Poseidon",
          ],
        },
        image: "https://example.com/cecrops.jpg",
        id: 45,
      },
      {
        name: "Scolopendra",
        description:
          "Giant sea serpent with numerous legs, capable of beaching ships.",
        category: "Monster",
        attributes: {
          origin: "Spawned in the depths of the sea",
          symbols: ["Multitude of legs", "Serpentine body"],
          abode: "Deep ocean trenches",
          powers: ["Immense strength", "Amphibious nature"],
          family: {
            parents: ["Poseidon", "Sea monster"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Terror of ancient mariners", "Battles with sea heroes"],
        },
        image: "https://example.com/scolopendra.jpg",
        id: 46,
      },
      {
        name: "Striges",
        description:
          "Nocturnal bird-like creatures that fed on human flesh and blood.",
        category: "Monster",
        attributes: {
          origin: "Cursed by Hecate",
          symbols: ["Owl-like appearance", "Sharp talons"],
          abode: "Dark forests and abandoned ruins",
          powers: ["Night vision", "Blood-draining abilities"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Nightly attacks on sleeping humans",
            "Warded off by protective charms",
          ],
        },
        image: "https://example.com/striges.jpg",
        id: 47,
      },
      {
        name: "Telekhines",
        description:
          "Sea demons with flippers for hands and dog-like heads, skilled in metallurgy.",
        category: "Monster",
        attributes: {
          origin: "Children of Pontus and Gaia",
          symbols: ["Dog heads", "Flipper hands"],
          abode: "Island of Rhodes",
          powers: ["Shapeshifting", "Metalworking skills"],
          family: {
            parents: ["Pontus", "Gaia"],
            siblings: ["Various sea creatures"],
            spouse: ["None"],
          },
          stories: [
            "Creators of Poseidon's trident",
            "Cursed by the gods for their hubris",
          ],
        },
        image: "https://example.com/telekhines.jpg",
        id: 48,
      },
      {
        name: "Hecatonchires",
        description:
          "Giants with a hundred hands and fifty heads, brothers of the Cyclopes.",
        category: "Monster",
        attributes: {
          origin: "Children of Uranus and Gaia",
          symbols: ["Hundred hands", "Fifty heads"],
          abode: "Tartarus (later guardians of the gates)",
          powers: ["Immense strength", "Control over storms"],
          family: {
            parents: ["Uranus", "Gaia"],
            siblings: ["Cyclopes", "Titans"],
            spouse: ["None"],
          },
          stories: [
            "Allies of Zeus in the Titanomachy",
            "Guardians of Tartarus",
          ],
        },
        image: "https://example.com/hecatonchires.jpg",
        id: 49,
      },
      {
        name: "Arae",
        description:
          "Female spirits of curses, particularly of the curses placed by the dead upon those guilty of their death.",
        category: "Monster",
        attributes: {
          origin: "Born from the vengeful thoughts of the dead",
          symbols: ["Dark wings", "Bloody talons"],
          abode: "Underworld",
          powers: ["Curse infliction", "Vengeance manifestation"],
          family: {
            parents: ["Nyx"],
            siblings: ["Keres", "Moirai"],
            spouse: ["None"],
          },
          stories: ["Punishers of murderers", "Servants of the Erinyes"],
        },
        image: "https://example.com/arae.jpg",
        id: 50,
      },
      {
        name: "Hippocamp",
        description:
          "Mythical creature with the upper body of a horse and the lower body of a fish.",
        category: "Monster",
        attributes: {
          origin: "Created by Poseidon",
          symbols: ["Horse head", "Fish tail"],
          abode: "Mediterranean Sea",
          powers: ["Swift swimming", "Water manipulation"],
          family: {
            parents: ["Poseidon", "Sea nymph"],
            siblings: ["Various sea creatures"],
            spouse: ["None"],
          },
          stories: ["Pulls Poseidon's chariot", "Guides ships through storms"],
        },
        image: "https://example.com/hippocamp.jpg",
        id: 51,
      },
      {
        name: "Cerastes",
        description:
          "Aggressive horned serpents known for their deadly ambush tactics.",
        category: "Monster",
        attributes: {
          origin: "Born from the blood of Medusa",
          symbols: ["Horns", "Snake body"],
          abode: "Deserts of Libya",
          powers: ["Camouflage", "Venomous bite"],
          family: {
            parents: ["Medusa's blood"],
            siblings: ["Various monsters"],
            spouse: ["None"],
          },
          stories: [
            "Threat to desert travelers",
            "Transformed into stone by Athena",
          ],
        },
        image: "https://example.com/cerastes.jpg",
        id: 52,
      },
      {
        name: "Amphisbaena",
        description:
          "Serpent with a head at each end, allowing it to move in either direction.",
        category: "Monster",
        attributes: {
          origin: "Born from the blood of Medusa",
          symbols: ["Two heads", "Serpentine body"],
          abode: "Libyan desert",
          powers: ["Bidirectional movement", "Venomous bite"],
          family: {
            parents: ["Medusa's blood"],
            siblings: ["Various monsters"],
            spouse: ["None"],
          },
          stories: ["Encountered by the Argonauts", "Used in ancient medicine"],
        },
        image: "https://example.com/amphisbaena.jpg",
        id: 53,
      },
      {
        name: "Catoblepas",
        description:
          "A buffalo-like creature with a head so heavy it could only look downwards, turning any creature that met its gaze to stone.",
        category: "Monster",
        attributes: {
          origin: "Native to Ethiopia",
          symbols: ["Heavy head", "Deadly gaze"],
          abode: "Marshes of Ethiopia",
          powers: ["Petrifying gaze", "Poisonous breath"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Encounters with travelers",
            "Avoided by local populations",
          ],
        },
        image: "https://example.com/catoblepas.jpg",
        id: 54,
      },
      {
        name: "Empousai",
        description:
          "Female vampiric demons with flaming hair, one bronze leg and one donkey leg.",
        category: "Monster",
        attributes: {
          origin: "Created by Hecate",
          symbols: ["Flaming hair", "Mismatched legs"],
          abode: "Dark places and crossroads",
          powers: ["Shape-shifting", "Seduction"],
          family: {
            parents: ["Hecate"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Seducing and devouring young men",
            "Encountered by Odysseus",
          ],
        },
        image: "https://example.com/empousai.jpg",
        id: 55,
      },
      {
        name: "Ophiotaurus",
        description:
          "A creature with the front half of a bull and the rear half of a serpent.",
        category: "Monster",
        attributes: {
          origin: "Born during the Titanomachy",
          symbols: ["Bull head", "Serpent tail"],
          abode: "Various",
          powers: ["Prophecy", "Power to overthrow gods"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Hunted by both Titans and Olympians",
            "Killed and burned by allies of Zeus",
          ],
        },
        image: "https://example.com/ophiotaurus.jpg",
        id: 56,
      },
      {
        name: "Taraxippus",
        description:
          "A malevolent spirit that spooked horses at racetracks, causing them to panic.",
        category: "Monster",
        attributes: {
          origin: "Various, including ghosts of fallen heroes",
          symbols: ["Invisible presence", "Horse panic"],
          abode: "Racetracks and hippodromes",
          powers: ["Invisibility", "Horse manipulation"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Disruption of chariot races",
            "Appeased through sacrifices",
          ],
        },
        image: "https://example.com/taraxippus.jpg",
        id: 57,
      },
      {
        name: "Ceuthonymus",
        description:
          "A monstrous being said to drag the souls of the dead down to the underworld.",
        category: "Monster",
        attributes: {
          origin: "Born in the depths of Tartarus",
          symbols: ["Dark form", "Soul-dragging chains"],
          abode: "Entrance to the underworld",
          powers: ["Soul manipulation", "Underworld travel"],
          family: {
            parents: ["Nyx"],
            siblings: ["Various chthonic deities"],
            spouse: ["None"],
          },
          stories: [
            "Guiding souls to judgment",
            "Encounters with heroes in the underworld",
          ],
        },
        image: "https://example.com/ceuthonymus.jpg",
        id: 58,
      },
      {
        name: "Pyrisoous",
        description: "A giant, flaming boar that ravaged the countryside.",
        category: "Monster",
        attributes: {
          origin: "Created by Ares",
          symbols: ["Flaming tusks", "Bristling fire"],
          abode: "Forests of Calydon",
          powers: ["Fire manipulation", "Devastating strength"],
          family: {
            parents: ["Ares"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Hunted by heroes", "Destruction of crops and villages"],
        },
        image: "https://example.com/pyrisoous.jpg",
        id: 59,
      },
      {
        name: "Cychreides",
        description:
          "A giant serpent that terrorized the island of Salamis before being driven out or slain.",
        category: "Monster",
        attributes: {
          origin: "Spawned from the earth",
          symbols: ["Enormous size", "Serpentine form"],
          abode: "Island of Salamis",
          powers: ["Constriction", "Venom"],
          family: {
            parents: ["Gaia"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Terrorizing Salamis", "Defeated by Cychreus"],
        },
        image: "https://example.com/cychreides.jpg",
        id: 60,
      },
      {
        name: "Cetus",
        description:
          "A sea monster sent by Poseidon to ravage the kingdom of Aethiopia.",
        category: "Monster",
        attributes: {
          origin: "Created by Poseidon",
          symbols: ["Whale-like body", "Serpentine features"],
          abode: "Mediterranean Sea",
          powers: ["Massive size", "Control over sea storms"],
          family: {
            parents: ["Poseidon"],
            siblings: ["Various sea monsters"],
            spouse: ["None"],
          },
          stories: ["Threat to Andromeda", "Slain by Perseus"],
        },
        image: "https://example.com/cetus.jpg",
        id: 61,
      },
      {
        name: "Lycanthrope",
        description:
          "Humans with the ability to shapeshift into wolves or wolf-like creatures.",
        category: "Monster",
        attributes: {
          origin: "Cursed by the gods",
          symbols: ["Wolf form", "Full moon"],
          abode: "Forests and rural areas",
          powers: ["Shapeshifting", "Enhanced strength"],
          family: {
            parents: ["Varies"],
            siblings: ["Varies"],
            spouse: ["Varies"],
          },
          stories: ["Curse of Lycaon", "Terrorizing villages"],
        },
        image: "https://example.com/lycanthrope.jpg",
        id: 62,
      },
      {
        name: "Strix",
        description:
          "Nocturnal bird of ill omen that fed on human flesh and blood.",
        category: "Monster",
        attributes: {
          origin: "Transformed by the gods",
          symbols: ["Owl-like appearance", "Hooked beak"],
          abode: "Dark forests",
          powers: ["Flight", "Blood-drinking"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Attacking infants", "Warded off by magical rituals"],
        },
        image: "https://example.com/strix.jpg",
        id: 63,
      },
      {
        name: "Charybdis",
        description:
          "Sea monster that created whirlpools by sucking in and spitting out vast amounts of water.",
        category: "Monster",
        attributes: {
          origin: "Daughter of Poseidon and Gaia",
          symbols: ["Whirlpool", "Gaping maw"],
          abode: "Strait of Messina",
          powers: ["Water manipulation", "Creating whirlpools"],
          family: {
            parents: ["Poseidon", "Gaia"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Threat to sailors", "Opposite of Scylla"],
        },
        image: "https://example.com/charybdis.jpg",
        id: 65,
      },
      {
        name: "Nemean Lion",
        description: "A monstrous lion with an impenetrable golden fur.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna",
          symbols: ["Golden fur", "Invulnerability"],
          abode: "Nemea",
          powers: ["Impenetrable hide", "Superhuman strength"],
          family: {
            parents: ["Typhon", "Echidna"],
            siblings: ["Various monsters"],
            spouse: ["None"],
          },
          stories: ["First labor of Heracles", "Skin used as armor"],
        },
        image: "https://example.com/nemean-lion.jpg",
        id: 66,
      },
      {
        name: "Crommyonian Sow",
        description: "A giant pig that ravaged the area around Crommyon.",
        category: "Monster",
        attributes: {
          origin: "Offspring of Typhon and Echidna",
          symbols: ["Enormous size", "Destructive nature"],
          abode: "Crommyon",
          powers: ["Immense strength", "Ferocity"],
          family: {
            parents: ["Typhon", "Echidna"],
            siblings: ["Various monsters"],
            spouse: ["None"],
          },
          stories: ["Defeated by Theseus", "Terrorized Crommyon"],
        },
        image: "https://example.com/crommyonian-sow.jpg",
        id: 67,
      },
      {
        name: "Teumessian Fox",
        description:
          "A giant fox destined never to be caught, sent to ravage the countryside of Thebes.",
        category: "Monster",
        attributes: {
          origin: "Created by the gods",
          symbols: ["Uncatchable speed", "Fox form"],
          abode: "Teumessus",
          powers: ["Divine speed", "Evasion"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Hunted by Laelaps", "Both turned to stone by Zeus"],
        },
        image: "https://example.com/teumessian-fox.jpg",
        id: 68,
      },
      {
        name: "Panes",
        description:
          "Goat-legged nature spirits known for their mischievous behavior and musical abilities.",
        category: "Monster",
        attributes: {
          origin: "Children of Hermes",
          symbols: ["Goat legs", "Pan flute"],
          abode: "Forests and wild places",
          powers: ["Nature manipulation", "Musical enchantment"],
          family: {
            parents: ["Hermes", "Various nymphs"],
            siblings: ["Satyrs"],
            spouse: ["None"],
          },
          stories: ["Followers of Dionysus", "Causing 'panic' in humans"],
        },
        image: "https://example.com/panes.jpg",
        id: 69,
      },
      {
        name: "Talos",
        description: "A giant bronze automaton that protected Europa in Crete.",
        category: "Monster",
        attributes: {
          origin: "Created by Hephaestus",
          symbols: ["Bronze body", "Single vein of ichor"],
          abode: "Island of Crete",
          powers: ["Invulnerability", "Superhuman strength"],
          family: {
            parents: ["Hephaestus"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Guardian of Crete", "Defeated by Medea"],
        },
        image: "https://example.com/talos.jpg",
        id: 70,
      },
      {
        name: "Gegenees",
        description:
          "A race of six-armed giants that inhabited the island of Bear Mountain.",
        category: "Monster",
        attributes: {
          origin: "Born from Gaia",
          symbols: ["Six arms", "Massive size"],
          abode: "Bear Mountain",
          powers: ["Immense strength", "Multiple limb coordination"],
          family: {
            parents: ["Gaia"],
            siblings: ["Various earth-born creatures"],
            spouse: ["None"],
          },
          stories: ["Battle with the Argonauts", "Defeated by Heracles"],
        },
        image: "https://example.com/gegenees.jpg",
        id: 71,
      },
      {
        name: "Keres",
        description:
          "Female death-spirits who personified violent death and were drawn to battlefields.",
        category: "Monster",
        attributes: {
          origin: "Children of Nyx",
          symbols: ["Black wings", "Bloody talons"],
          abode: "Underworld",
          powers: ["Death manipulation", "Battle frenzy"],
          family: {
            parents: ["Nyx"],
            siblings: ["Thanatos", "Hypnos"],
            spouse: ["None"],
          },
          stories: ["Presence in epic battles", "Feared by warriors"],
        },
        image: "https://example.com/keres.jpg",
        id: 72,
      },
      {
        name: "Mormo",
        description:
          "A fearsome female spirit used to frighten children into obedience.",
        category: "Monster",
        attributes: {
          origin: "Associated with Hecate",
          symbols: ["Vampiric features", "Terrifying visage"],
          abode: "Dark places",
          powers: ["Shape-shifting", "Inducing fear"],
          family: {
            parents: ["Unknown"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Threatening disobedient children", "Nocturnal hauntings"],
        },
        image: "https://example.com/mormo.jpg",
        id: 73,
      },
      {
        name: "Alcyoneus",
        description:
          "The eldest of the Giants, born to oppose the Olympian gods.",
        category: "Giant",
        attributes: {
          origin: "Son of Gaia and Uranus",
          symbols: ["Massive size", "Immortality on native soil"],
          abode: "Pallene, Thrace",
          powers: ["Immortality in homeland", "Superhuman strength"],
          family: {
            parents: ["Gaia", "Uranus"],
            siblings: ["Other Giants"],
            spouse: ["None"],
          },
          stories: [
            "Battle with Heracles",
            "Defeat when dragged from native land",
          ],
        },
        image: "https://example.com/alcyoneus.jpg",
        id: 74,
      },
      {
        name: "Antaeus",
        description:
          "A giant who challenged passersby to wrestling matches and gained strength from contact with the earth.",
        category: "Giant",
        attributes: {
          origin: "Son of Poseidon and Gaia",
          symbols: ["Wrestling stance", "Connection to earth"],
          abode: "Libya",
          powers: ["Strength from earth contact", "Wrestling prowess"],
          family: {
            parents: ["Poseidon", "Gaia"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Defeat by Heracles",
            "Building temple from skulls of victims",
          ],
        },
        image: "https://example.com/antaeus.jpg",
        id: 75,
      },
      {
        name: "Argus Panoptes",
        description: "A giant with a hundred eyes, known for his watchfulness.",
        category: "Giant",
        attributes: {
          origin: "Son of Arestor",
          symbols: ["Hundred eyes", "Watchful gaze"],
          abode: "Arcadia",
          powers: ["All-seeing vision", "Tireless vigilance"],
          family: {
            parents: ["Arestor"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Guardian of Io", "Slain by Hermes"],
        },
        image: "https://example.com/argus-panoptes.jpg",
        id: 76,
      },
      {
        name: "Colchian Dragon",
        description: "A sleepless dragon that guarded the Golden Fleece.",
        category: "Monster",
        attributes: {
          origin: "Created by Ares",
          symbols: ["Coiled serpent", "Vigilant eyes"],
          abode: "Colchis",
          powers: ["Sleeplessness", "Venomous bite"],
          family: {
            parents: ["Ares"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: [
            "Guardian of the Golden Fleece",
            "Defeated by Jason and Medea",
          ],
        },
        image: "https://example.com/colchian-dragon.jpg",
        id: 77,
      },
      {
        name: "Python",
        description:
          "A monstrous serpent that lived in the center of the earth, guarding the Oracle of Delphi.",
        category: "Monster",
        attributes: {
          origin: "Child of Gaia",
          symbols: ["Coiled serpent", "Oracle guardian"],
          abode: "Delphi",
          powers: ["Prophecy", "Earth connection"],
          family: {
            parents: ["Gaia"],
            siblings: ["None"],
            spouse: ["None"],
          },
          stories: ["Slain by Apollo", "Guardian of the Delphic Oracle"],
        },
        image: "https://example.com/python.jpg",
        id: 78,
      },
      {
        name: "Steropes",
        description:
          "One of the elder Cyclopes, known for creating Zeus's thunderbolts.",
        category: "Giant",
        attributes: {
          origin: "Son of Uranus and Gaia",
          symbols: ["Single eye", "Thunderbolt"],
          abode: "Mount Etna",
          powers: ["Smithing", "Lightning creation"],
          family: {
            parents: ["Uranus", "Gaia"],
            siblings: ["Brontes", "Arges"],
            spouse: ["None"],
          },
          stories: ["Forging Zeus's weapons", "Imprisonment by Cronus"],
        },
        image: "https://example.com/steropes.jpg",
        id: 79,
      },
    ],
  };

  return new Response(JSON.stringify(monsters), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
