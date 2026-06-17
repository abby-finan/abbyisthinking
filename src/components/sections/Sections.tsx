"use client";

import { useEffect, useState } from "react";
import { computeAge } from "@/lib/storage";
import { PortfolioData } from "@/lib/types";
import { ItemList, ItemText, ItemMeta, linkifyText } from "../ContentPanel";

function LiveAge({ birthDate }: { birthDate: string }) {
  const [age, setAge] = useState(computeAge(birthDate));

  useEffect(() => {
    const id = setInterval(() => setAge(computeAge(birthDate)), 1000);
    return () => clearInterval(id);
  }, [birthDate]);

  return (
    <ItemText>
      {age.years} years · {age.months.toLocaleString()} months ·{" "}
      {age.days.toLocaleString()} days · {age.hours.toLocaleString()} hours ·{" "}
      {age.seconds.toLocaleString()} seconds
    </ItemText>
  );
}

export function ThinkingSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.thinking.map((item) => (
        <ItemText key={item.id}>{item.text}</ItemText>
      ))}
    />
  );
}

export function DeathRowMealSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.deathRowMeal.map((item) => (
        <div key={item.id}>
          <ItemText>{item.name}</ItemText>
          <ItemMeta>{item.whereToGet}</ItemMeta>
          {item.notes && <ItemMeta>{item.notes}</ItemMeta>}
        </div>
      ))}
    />
  );
}

export function OpenQuestionsSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.openQuestions.map((item) => (
        <div key={item.id}>
          <ItemText>{item.question}</ItemText>
          {item.context && <ItemMeta>{item.context}</ItemMeta>}
        </div>
      ))}
    />
  );
}

export function JunkDrawerSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.junkDrawer.map((item) => (
        <div key={item.id}>
          <ItemMeta>{item.type}</ItemMeta>
          <ItemText>{item.title}</ItemText>
          <ItemMeta>{item.content}</ItemMeta>
          {item.url && (
            <p className="mt-1 text-[11px] font-light text-[var(--text-muted)]/50">
              {linkifyText(item.url)}
            </p>
          )}
        </div>
      ))}
    />
  );
}

export function IdeaGraveyardSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.ideaGraveyard.map((item) => (
        <div key={item.id}>
          <ItemText>{item.title}</ItemText>
          <ItemMeta>{item.description}</ItemMeta>
          {item.whyItDied && (
            <p className="mt-1 text-[11px] font-light tracking-wide text-[var(--text-muted)]/50">
              <span className="text-[var(--text-muted)]/70">Reason it died: </span>
              {linkifyText(item.whyItDied)}
            </p>
          )}
        </div>
      ))}
    />
  );
}

export function HotTakesSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.hotTakes.map((item) => (
        <div key={item.id}>
          <ItemText>{item.take}</ItemText>
          {item.context && <ItemMeta>{item.context}</ItemMeta>}
        </div>
      ))}
    />
  );
}

export function WorthYourTimeSection({ data }: { data: PortfolioData }) {
  return (
    <ItemList
      items={data.worthYourTime.map((item) => (
        <div key={item.id}>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-light leading-relaxed text-[var(--text-muted)] underline decoration-white/10 underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
            >
              {item.title}
            </a>
          ) : (
            <ItemText>{item.title}</ItemText>
          )}
          <ItemMeta>{item.content}</ItemMeta>
        </div>
      ))}
    />
  );
}

export function StatsSection({ data }: { data: PortfolioData }) {
  return (
    <div className="space-y-8">
      <div>
        <ItemMeta>alive since August 29, 2001</ItemMeta>
        <LiveAge birthDate={data.birthDate} />
      </div>

      {data.familyOrigin && (
        <div>
          <ItemMeta>family origin</ItemMeta>
          <ItemText>{data.familyOrigin}</ItemText>
        </div>
      )}

      {data.countriesVisited.length > 0 && (
        <div>
          <ItemMeta>countries visited</ItemMeta>
          <ItemText>{data.countriesVisited.join(", ")}</ItemText>
        </div>
      )}

      {data.citiesLived.length > 0 && (
        <div>
          <ItemMeta>cities lived</ItemMeta>
          <ItemText>{data.citiesLived.join(", ")}</ItemText>
        </div>
      )}

      {data.stats.length > 0 && (
        <ItemList
          items={data.stats.map((stat) => (
            <div key={stat.id}>
              <ItemMeta>{stat.label}</ItemMeta>
              <ItemText>
                {String(stat.value)}
                {stat.unit ? ` ${stat.unit}` : ""}
              </ItemText>
            </div>
          ))}
        />
      )}
    </div>
  );
}
