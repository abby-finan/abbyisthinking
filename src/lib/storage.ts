import { DEFAULT_DATA } from "./defaultData";
import { PortfolioData } from "./types";

export function getPortfolioData(): PortfolioData {
  return DEFAULT_DATA;
}

export function computeAge(birthDate: string) {
  const birth = new Date(birthDate);
  const now = new Date();
  const diffMs = now.getTime() - birth.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  const months =
    years * 12 +
    monthDiff +
    (now.getDate() < birth.getDate() ? -1 : 0);

  return { seconds, minutes, hours, days, months, years };
}
