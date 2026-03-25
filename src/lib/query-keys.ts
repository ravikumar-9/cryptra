
export const queryKeys = {
    coins: ["coins"],
    coin: (symbol: string) => ["coin", symbol],
    chart: (symbol: string, interval: string) => [
      "chart",
      symbol,
      interval,
    ],
  };