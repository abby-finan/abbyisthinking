import { PortfolioData } from "./types";

export const DEFAULT_DATA: PortfolioData = {
  birthDate: "2001-08-29T00:00:00",
  familyOrigin: "Update me",
  citiesLived: ["San Francisco", "New York"],
  countriesVisited: ["USA", "France", "Japan", "Mexico"],
  thinking: [
    {
      id: "t1",
      text: "What would a portfolio look like if it felt like a living document instead of a résumé?",
      createdAt: new Date().toISOString(),
    },

  ],
  deathRowMeal: [
    {
      id: "m1",
      name: "Mojoes Chicken Smush",
      whereToGet: "Raleigh, NC",
      notes: "always ALWAYS get mojoes sauce on the side",
    },
    {
      id: "m2",
      name: "Mini french toast Eggo waffles",
      whereToGet: "Grocery store",
    },
    {
      id: "m3",
      name: "Bernie's vinegar chicken",
      whereToGet: "Greenpoint, Brooklyn",
    },
    {
      id: "m4",
      name: "Shirley temple with ELECTRIC sprite + extra cherries",
      whereToGet: "Ideally served in a styrofoam cup with crushed ice",
    },
    {
      id: "m5",
      name: "Twiced baked potato, extra loaded, add horseradish sauce",
      whereToGet: "Angus Barn - Raleigh, NC",
    },
    {
      id: "m6",
      name: "Grilled branzino with chimichurri",
      whereToGet: "Leon's Oysters - Charleston, SC",
    },
    {
      id: "m7",
      name: "Tuna nigiri, soy sauce, wasabi, ginger, sesame seeds",
      whereToGet: "As fresh as you can get it",
    },
    {
      id: "m8",
      name: "Hushpuppies w butter and honey",
      whereToGet: "42nd Street Oyster Bar - Raleigh, NC",
    },
    {
      id: "m9",
      name: "Chinese lemon pepper wet wings",
      whereToGet: "Jen Chan's - Atlanta, GA",
    },
    {
      id: "m10",
      name: "Steamed crab legs",
      whereToGet: "@ home",
      notes: "butter and lemon",
    },
    {
      id: "m11",
      name: "Banana Bread",
      whereToGet: "Mom",
    },
    {
      id: "m12",
      name: "Oreo Dream Extreme Cheesecake",
      whereToGet: "Cheesecake Factory (i swear it's life changing)",
    },
    {
      id: "m13",
      name: "Hot glazed donut",
      whereToGet: "Krispy Kreme or Brightspot Donuts in Raleigh, NC",
    },
    {
      id: "m14",
      name: "Griddled blueberry muffin",
      whereToGet: "Au Cheval, NYC",
    },
    
  ],
  openQuestions: [
    {
      id: "q1",
      question: "Are all dads cut from the same cloth? (or is this just my dad?)",
      context: "e.g., pork chops, split pea soup, pot roast, brats, reubens, cashews (*shake handful of them in hand on queue*), ipads, western movies, etc. etc.",
    },
    {
      id: "q2",
      question: "tbd",
    },
  ],
  junkDrawer: [
    {
      id: "j1",
      type: "quote",
      title: "The golden eternity - Jack Kerouac excerpt",
      content: `I have lots of things to share now, in case we ever meet, concerning the message that was transmitted to me under a pine tree in North Carolina on a cold winter moonlit night. It said that Nothing Ever Happened, so don't worry. It's all like a dream. Everything is ecstasy, inside. We just don't know it because of our thinking-minds. But in our true blissful essence of mind is known that everything is alright forever and forever and forever. Close your eyes, let your hands and nerve-ends drop, stop breathing for 3 seconds, listen to the silence inside the illusion of the world, and you will remember the lesson you forgot, which was taught in immense milky way soft cloud innumerable worlds long ago and not even at all. It is all one vast awakened thing. I call it the golden eternity. It is perfect.
We were never really born, we will never really die. It has nothing to do with the imaginary idea of a personal self, other selves, many selves everywhere: Self is only an idea, a mortal idea. That which passes into everything is one thing. It's a dream already ended. There's nothing to be afraid of and nothing to be glad about. I know this from staring at mountains months on end. They never show any expression, they are like empty space. Do you think the emptiness of space will ever crumble away? Mountains will crumble, but the emptiness of space, which is the one universal essence of mind, the vast awakenerhood, empty and awake, will never crumble away because it was never born
The world you see is just a movie in your mind.
Rocks dont see it.
Bless and sit down.
Forgive and forget.
Practice kindness all day to everybody
and you will realize you're already
in heaven now.
That's the story.
That's the message.
Nobody understands it,
nobody listens, they're
all running around like chickens with heads cut
off. I will try to teach it but it will
be in vain, s'why I'll
end up in a shack
praying and being
cool and singing
by my woodstove
making pancakes.`,
    },
    {
      id: "j2",
      type: "comic",
      title: "calvin and hobbes",
      content: "If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently. https://eddygardiner.medium.com/looking-at-the-stars-2436a2dd36e2",
    },
    {
      id: "j3",
      type: "interesting game theory",
      title: "There is a mathematical truth to trust.",
      content: "https://ncase.me/trust/",
    },
    {
      id: "j4",
      type: "map",
      title: "Tisometric nyc",
      content: "https://cannoneyed.com/isometric-nyc",
    },
  ],
  stats: [
    { id: "s1", label: "Countries visited", value: 10, category: "travel" },
    { id: "s2", label: "Cities lived", value: 3, category: "places" },
    { id: "s3", label: "Cups of coffee today", value: 0, category: "daily" },
  ],
  ideaGraveyard: [
    {
      id: "i1",
      title: "Controversial social experiment",
      description: "Dating app where you get ranked based strictly on algorithmic facial analysis and you can only message people who are also in the same tier as you.",
      whyItDied: "Controversial and ethically dubious.",
    },
    {
      id: "i2",
      title: "Ocean vision goggles",
      description: "For peace of mind, I want to see what's near me in the ocean in my vicinity (e.g., sharks, whales, seals, fish, stringray, jellyfish, etc.). Would love some goggles that let you see/identify what is in the ocean near me",
      whyItDied: "Technological restraints.",
    },
  ],
  hotTakes: [
    {
      id: "h1",
      take: "Here're” should be a more widely used contraction - it saves 1 letter BUT so does here's. Here're the papers you asked for, etc.",
    },
    {
      id: "h2",
      take: "Let's get rid of how American's currently use 'biweekly' and replace with 'fortnightly'. The use of 'biweekly' is extremely confusing for Americans. It means 2x a week but in the corporate world is commonly used as 'once every 2 weeks'. Makes no sense to have this mean 2 things and very confusing when a manager says to set up a biweekly sync. We should use fortnightly (once every 14 days) to signal once every 2 weeks instead, like the Brits do.",
    },
    {
      id: "h3",
      take: "More people should know about the Albatross - animal w the largest wingspan (around 12 ft) and can stay in the air for YEARS, eating in the air, sleeping in the air. The muscles of its wings lock and they can glide for days without flapping.",
    },
    {
      id: "h4",
      take: "Kosher salt is the most elite salt. Nuff said. I will not be taking any questions or comments at this time",
    },
    {
      id: "h5",
      take: "Every cocktail bar should have blue cheese stuffed olives. ",
    }
  ],
  worthYourTime: [
    {
      id: "w1",
      title: "On building for the agentic era",
      content: "Cursor Origin — thinking about what infrastructure looks like when code moves faster than we can review it.",
      url: "https://cursor.com/origin",
      type: "thought",
    },
  ],
};
