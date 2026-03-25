import { useMemo, useState } from "react";
import { useCoins } from "../hooks/useMarkets";
import { useLiveMarket } from "../hooks/useLiveMarket";
import MarketsTable from "../components/marketsTable";
import useDebounce from "../../../hooks/usedebounce";
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import TableSkeleton from "../../../components/skeleton/tableSkeleton";

const Markets = () => {
  const { data: coinsList = [], isLoading } = useCoins();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const liveData = useLiveMarket();

  const mergedCoins = useMemo(() => {
    return coinsList.map((coin) => {
      const live = liveData[coin.symbol];

      return {
        ...coin,
        lastPrice: live?.lastPrice ?? coin.lastPrice,
        highPrice: live?.highPrice ?? coin.highPrice,
        lowPrice: live?.lowPrice ?? coin.lowPrice,
        volume: live?.volume ?? coin.volume,
        priceChangePercent: live?.priceChangePercent ?? coin.priceChangePercent,
      };
    });
  }, [coinsList, liveData]);

  const filteredCoins = useMemo(() => {
    return mergedCoins?.filter((coin) =>
      coin?.symbol
        ?.toLocaleLowerCase()
        .includes(debouncedSearchTerm?.toLowerCase())
    );
  }, [debouncedSearchTerm, mergedCoins]);

  return (
    <div className="p-6 bg-linear-to-b from-black to-gray-950 min-h-screen text-white">
      <h1 className="text-2xl font-semibold mb-6">Markets</h1>
      <div className="relative flex items-center py-6">
        <Search className="absolute left-2 h-5 w-6" />
        <Input
          placeholder="Search..."
          type="search"
          className="px-8 py-4 md:w-1/2 h-12"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {isLoading ? <TableSkeleton /> : <MarketsTable coins={filteredCoins} />}
    </div>
  );
};

export default Markets;
