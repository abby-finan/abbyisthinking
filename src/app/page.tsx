"use client";

import { useState } from "react";
import { Clock } from "@/components/Clock";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { ContentPanel } from "@/components/ContentPanel";
import { Scene3D } from "@/components/Scene3D";
import { getPortfolioData } from "@/lib/storage";
import { SectionId } from "@/lib/types";
import {
  ThinkingSection,
  DeathRowMealSection,
  OpenQuestionsSection,
  JunkDrawerSection,
  IdeaGraveyardSection,
  HotTakesSection,
  WorthYourTimeSection,
  StatsSection,
} from "@/components/sections/Sections";

function SectionContent({
  sectionId,
  data,
}: {
  sectionId: SectionId;
  data: ReturnType<typeof getPortfolioData>;
}) {
  switch (sectionId) {
    case "thinking":
      return <ThinkingSection data={data} />;
    case "death-row-meal":
      return <DeathRowMealSection data={data} />;
    case "open-questions":
      return <OpenQuestionsSection data={data} />;
    case "junk-drawer":
      return <JunkDrawerSection data={data} />;
    case "stats":
      return <StatsSection data={data} />;
    case "idea-graveyard":
      return <IdeaGraveyardSection data={data} />;
    case "hot-takes":
      return <HotTakesSection data={data} />;
    case "worth-your-time":
      return <WorthYourTimeSection data={data} />;
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const data = getPortfolioData();

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <GradientBackground />
      <Scene3D visible={!activeSection} />

      <header className="fixed top-0 left-0 right-0 z-20 px-6 py-5">
        <Clock />
      </header>

      <Navigation
        active={activeSection}
        onSelect={(id) =>
          setActiveSection((prev) => (prev === id ? null : id))
        }
      />

      <ContentPanel
        sectionId={activeSection}
        onClose={() => setActiveSection(null)}
      >
        {activeSection && (
          <SectionContent sectionId={activeSection} data={data} />
        )}
      </ContentPanel>
    </main>
  );
}
