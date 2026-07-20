export type SectionId =
  | "thinking"
  | "death-row-meal"
  | "open-questions"
  | "junk-drawer"
  | "stats"
  | "idea-graveyard"
  | "hot-takes"
  | "worth-your-time";

export interface ThinkingItem {
  id: string;
  text: string;
  createdAt: string;
}

export interface MealItem {
  id: string;
  name: string;
  whereToGet: string;
  notes?: string;
}

export interface QuestionItem {
  id: string;
  question: string;
  context?: string;
}

export type JunkDrawerType =
  | "screenshot"
  | "graph"
  | "quote"
  | "domain"
  | "note"
  | "observation"
  | "book"
  | "comic"
  | "interesting game theory"
  | "map"
  | "link";

export interface JunkDrawerItem {
  id: string;
  type: JunkDrawerType;
  title: string;
  content: string;
  url?: string;
}

export interface StatEntry {
  id: string;
  label: string;
  value: number | string;
  unit?: string;
  category?: string;
}

export interface IdeaItem {
  id: string;
  title: string;
  description: string;
  whyItDied?: string;
}

export interface HotTakeItem {
  id: string;
  take: string;
  context?: string;
}

export interface WorthItem {
  id: string;
  title: string;
  content: string;
  url?: string;
  type?: "article" | "book" | "thought" | "link" | "quote" | "other";
}

export interface PortfolioData {
  thinking: ThinkingItem[];
  deathRowMeal: MealItem[];
  openQuestions: QuestionItem[];
  junkDrawer: JunkDrawerItem[];
  stats: StatEntry[];
  ideaGraveyard: IdeaItem[];
  hotTakes: HotTakeItem[];
  worthYourTime: WorthItem[];
  birthDate: string;
  citiesLived: string[];
  countriesVisited: string[];
  familyOrigin?: string;
}

export const SECTIONS: {
  id: SectionId;
  label: string;
  shortLabel: string;
}[] = [
  { id: "thinking", label: "Abby is thinking", shortLabel: "Thinking" },
  { id: "junk-drawer", label: "Abby's digital junk drawer (shit i didnt build but I love)", shortLabel: "Junk drawer" },
  // { id: "open-questions", label: "Abby's open questions", shortLabel: "Open questions" },
  { id: "death-row-meal", label: "Abby's death row meal", shortLabel: "Death row meal" },
  // { id: "stats", label: "Abby's stats", shortLabel: "Stats" },
  // { id: "idea-graveyard", label: "Abby's idea graveyard", shortLabel: "Idea graveyard" },
  // { id: "hot-takes", label: "Abby's hot takes", shortLabel: "Hot takes" },
  { id: "worth-your-time", label: "Things worth your time", shortLabel: "Worth your time" },
];
