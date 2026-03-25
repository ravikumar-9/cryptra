import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api/markets.api";
import { queryKeys } from "../../../lib/query-keys";
import type { Binance24hrTicker } from "../types";

export const useCoins = () => {
  return useQuery<Binance24hrTicker[]>({
    queryKey: queryKeys.coins,
    queryFn: fetchCoins,
  });
};