import { PortfolioData } from "./types";

export const DEFAULT_DATA: PortfolioData = {
  birthDate: "1995-06-15T00:00:00",
  familyOrigin: "Update me",
  citiesLived: ["San Francisco", "New York"],
  countriesVisited: ["USA", "France", "Japan", "Mexico"],
  thinking: [
    {
      id: "t1",
      text: "What would a portfolio look like if it felt like a living document instead of a résumé?",
      createdAt: new Date().toISOString(),
    },
    {
      id: "t2",
      text: "The best interfaces disappear — Thrive Capital, Compile, Origin all prove that.",
      createdAt: new Date().toISOString(),
    },
  ],
  deathRowMeal: [
    {
      id: "m1",
      name: "Margherita pizza from Pizzeria Delfina",
      whereToGet: "Mission District, SF",
      notes: "Thin crust, extra basil",
    },
    {
      id: "m2",
      name: "Dark chocolate gelato",
      whereToGet: "Gio Gelati, North Beach",
    },
  ],
  openQuestions: [
    {
      id: "q1",
      question: "Why do the best product experiences feel like they have almost no UI?",
      context: "Thrive, Compile, Origin",
    },
    {
      id: "q2",
      question: "What makes an idea worth keeping vs. sending to the graveyard?",
    },
  ],
  junkDrawer: [
    {
      id: "j1",
      type: "quote",
      title: "On simplicity",
      content: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    },
    {
      id: "j2",
      type: "book",
      title: "Seeing Like a State",
      content: "James C. Scott — on legibility, systems, and unintended consequences.",
    },
    {
      id: "j3",
      type: "domain",
      title: "abbyisthinking.com",
      content: "This site. Obviously.",
    },
  ],
  stats: [
    { id: "s1", label: "Countries visited", value: 4, category: "travel" },
    { id: "s2", label: "Cities lived", value: 2, category: "places" },
    { id: "s3", label: "Cups of coffee today", value: 2, category: "daily" },
  ],
  ideaGraveyard: [
    {
      id: "i1",
      title: "Social experiment: only communicate in haiku for a week",
      description: "Thought it would be poetic. Would mostly be annoying.",
      whyItDied: "Friends threatened to block me",
    },
    {
      id: "i2",
      title: "App that rates every conversation in real time",
      description: "Like Yelp but for small talk.",
      whyItDied: "Ethically dubious. Also nobody asked for this.",
    },
  ],
  hotTakes: [
    {
      id: "h1",
      take: "Most dashboards are just anxiety generators with better typography.",
    },
    {
      id: "h2",
      take: "The best personal websites will look more like journals than portfolios within 5 years.",
      context: "You're looking at one",
    },
  ],
  worthYourTime: [
    {
      id: "w1",
      title: "Thrive Capital's website",
      content: "A masterclass in restraint. Date, time, logo. That's it.",
      url: "https://www.thrivecap.com",
      type: "link",
    },
    {
      id: "w2",
      title: "On building for the agentic era",
      content: "Cursor Origin — thinking about what infrastructure looks like when code moves faster than we can review it.",
      url: "https://cursor.com/origin",
      type: "thought",
    },
  ],
};
