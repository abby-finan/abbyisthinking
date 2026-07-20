import { PortfolioData } from "./types";

export const DEFAULT_DATA: PortfolioData = {
  birthDate: "2001-08-29T00:00:00",
  familyOrigin: "San Sostene, province of Catanzaro, Calabria, Italy",
  citiesLived: ["Raleigh", "Atlanta", "New York"],
  countriesVisited: ["USA", "Portugal", "Italy", "France", "Spain", "Mexico", "Canada", "Dominican Republic", "Bahamas", "Jamaica", "Cuba"],
  thinking: [
    {
      id: "t1",
      text: "fun little side project i've been working on called word of mouth https://wrdofmouth.com. Get trusted recs from friends instead of relying on anonymous internet strangers' reviews.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t2",
      text: "career pivot thought: craving a career pivot, so am thinking about making the jump into GTM. I like games with scoreboards so it feels right. Probs a risk to totally start over my career BUT I recently read something that resonated w me and maybe it'll hit you: career wise, the comfortable choice is very often the wrong choice",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t3",
      text: "quick thought: every cocktail bar should have blue cheese stuffed olives.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t4",
      text: "salt related thought: kosher salt is the most elite salt.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t5",
      text: "animal related thought: more people should know about the Albatross. Animal w the largest wingspan (around 12 ft) and can stay in the air for YEARS, eats in the air, sleeps in the air, the muscles of its wings lock and they can glide for days without flapping. INSANE. WHY DOES NOBDOY TALK ABOUT THIS",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t6",
      text: "book thought: the Red Rising series (by pierce brown) is a must read sci fi series, but it's weirdly siimilar to the Will of the Many by brandon sanderson which is also a banger",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t7",
      text: "deeply inquisitive thought & broad generalization: why do all dads love pork chops, split pea soup, pot roast, bratwursts, reubens, cashews, ipads, etc.?",
      createdAt: new Date().toISOString(),
    },

  ],
  deathRowMeal: [
    {
      id: "m1",
      name: "mojoes chicken smush",
      whereToGet: "Raleigh, NC. always ALWAYS get mojoes sauce on the side",
    },
    {
      id: "m2",
      name: "mini french toast eggo waffles",
      whereToGet: "Grocery store",
    },
    {
      id: "m3",
      name: "bernie's vinegar chicken",
      whereToGet: "Greenpoint, Brooklyn",
    },
    {
      id: "m4",
      name: "shirley temple with electric ass sprite and extra cherries",
      whereToGet: "ideally served in a cup with crushed ice",
    },
    {
      id: "m5",
      name: "grilled branzino with chimichurri",
      whereToGet: "Leon's Oysters Charleston, SC",
    },
    {
      id: "m6",
      name: "tuna nigiri, soy sauce, wasabi, ginger",
      whereToGet: "As fresh as you can get it",
    },
    {
      id: "m7",
      name: "fresh hushpuppies w salted butter",
      whereToGet: "42nd Street Oyster Bar Raleigh, NC",
    },
    {
      id: "m8",
      name: "chinese lemon pepper wet wings",
      whereToGet: "Jen Chan's Atlanta, GA",
    },
    {
      id: "m9",
      name: "twiced baked potato, extra loaded, add horseradish sauce",
      whereToGet: "Angus Barn Raleigh, NC",
    },
    {
      id: "m10",
      name: "steamed crab legs",
      whereToGet: "at home w butter and lemon",
    },
    {
      id: "m11",
      name: "banana bread",
      whereToGet: "Mom",
    },
    {
      id: "m12",
      name: "oreo dream extreme cheesecake",
      whereToGet: "i know i know ... but get this from Cheesecake Factory i swear it's life changing",
    },
    {
      id: "m13",
      name: "the freshest and hottest glazed donut",
      whereToGet: "Krispy Kreme or Brightspot Donuts in Raleigh, NC",
    },
    {
      id: "m14",
      name: "griddled blueberry muffin",
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
      type: "map",
      title: "isometric nyc",
      content: "Isometric map of NYC",
      url: "https://cannoneyed.com/isometric-nyc",
    },
    {
      id: "j2",
      type: "link",
      title: "hardtobook.xyz",
      content: "Cheat code to get a reservation at the hardest to book restaurants in NYC",
      url: "http://hardtobook.xyz",
    },
    {
      id: "j3",
      type: "link",
      title: "damnlines.com",
      content: "Lines that are too long to wait in in NYC",
      url: "https://damnlines.com",
    },
    {
      id: "j4",
      type: "link",
      title: "startups.gallery",
      content: "Huge epic list of top startups, extremely fun to browse",
      url: "https://startups.gallery",
    },
    {
      id: "j5",
      type: "link",
      title: "enterportal.xyz",
      content: "Digital MoMA gallery a garden of human creativity",
      url: "https://www.enterportal.xyz",
    },
    {
      id: "j6",
      type: "link",
      title: "neal.fun/size-of-life",
      content: "The scale of all living things",
      url: "http://neal.fun/size-of-life",
    },
    {
      id: "j7",
      type: "link",
      title: "knicksmosaic.com",
      content: "A mosaic of thousands of NY Knicks photos",
      url: "http://knicksmosaic.com",
    },
    {
      id: "j8",
      type: "link",
      title: "rothko.joonas.wtf",
      content: "Weather matched Rothkos",
      url: "http://rothko.joonas.wtf",
    },
    {
      id: "j9",
      type: "link",
      title: "kathytzhou.com/sunset",
      content: "Sunset predictor",
      url: "http://kathytzhou.com/sunset",
    },
    {
      id: "j10",
      type: "link",
      title: "basecase.vc/booklist",
      content: "Best books on the internet, ranked",
      url: "http://basecase.vc/booklist",
    },
    {
      id: "j11",
      type: "link",
      title: "profconradi.com",
      content: "Math visualized",
      url: "http://profconradi.com",
    },
    {
      id: "j12",
      type: "link",
      title: "everynoise.com",
      content: "Every music genre ever",
      url: "http://everynoise.com",
    },
    {
      id: "j13",
      type: "link",
      title: "sandspiel.club",
      content: "Elements game",
      url: "http://sandspiel.club",
    },
    {
      id: "j14",
      type: "link",
      title: "window-swap.com",
      content: "Look out a stranger's window somewhere in the world",
      url: "http://window-swap.com",
    },
    {
      id: "j15",
      type: "link",
      title: "awwwards.com",
      content: "Beautiful websites",
      url: "http://awwwards.com",
    },
    {
      id: "j16",
      type: "link",
      title: "101ads.org",
      content: "Current billboard ads along Highway 101 from Silicon Valley to SF",
      url: "https://101ads.org",
    },
  ],
  stats: [
    { id: "s1", label: "Countries visited", value: 11, category: "travel" },
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
      type: "link",
      title: "there is a mathematical truth to trust.",
      content: "Interesting game theory",
      url: "https://ncase.me/trust/",
    },
    {
      id: "w2",
      type: "other",
      title: "calvin and hobbes",
      content: "If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently.",
      url: "https://eddygardiner.medium.com/looking-at-the-stars-2436a2dd36e2",
    },
    {
      id: "w3",
      type: "quote",
      title: "the golden eternity by Jack Kerouac",
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
      url: "https://www.themarginalian.org/2014/03/12/jack-kerouac-golden-eternity/",
    },
  ],
};
