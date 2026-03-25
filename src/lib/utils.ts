import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLimit = (interval: string) => {
  switch (interval) {
    case "1m":
    case "3m":
    case "5m":
      return 500;

    case "15m":
    case "30m":
    case "1h":
      return 300;

    case "4h":
    case "1d":
      return 200;

    default:
      return 500;
  }
};
