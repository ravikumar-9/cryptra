import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { Binance24hrTicker } from "../types";
import { Link } from "react-router-dom";

const ROW_HEIGHT = 80;

const MarketsTable = ({ coins }: { coins: Binance24hrTicker[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: coins?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
  });

  return (
    <div className="rounded-2xl border border-gray-800 bg-linear-to-b from-gray-950 to-black shadow-xl backdrop-blur-lg">
      {/* Header */}
      <div className="hidden md:grid grid-cols-6 bg-gray-900/80 text-gray-400 text-xs uppercase tracking-wider px-4 py-3">
        <div>#</div>
        <div>Asset</div>
        <div>Price</div>
        <div className="flex items-center gap-1">
          24h High <TrendingUp size={14} className="text-green-400" />
        </div>
        <div className="flex items-center gap-1">
          24h Low <TrendingDown size={14} className="text-red-400" />
        </div>
        <div className="text-right pr-6">Volume</div>
      </div>

      {/* Body */}
      <div ref={parentRef} className="h-120 overflow-auto no-scrollbar">
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const coin = coins[virtualRow.index];

            const price = Number(coin?.lastPrice);
            const high = Number(coin?.highPrice);
            const low = Number(coin?.lowPrice);
            const volume = Number(coin?.volume);
            const change = Number(coin?.priceChangePercent);
            const isPositive = change >= 0;

            return (
              <Link key={coin.symbol} to={`/coin-details/${coin?.symbol}`}>
                <div
                  className="absolute left-0 w-full border-b border-gray-800/60 hover:bg-gray-900/60 transition"
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {/* Desktop Row */}
                  <div className="hidden md:grid grid-cols-6 items-center px-4 py-3 text-sm">
                    <div className="text-gray-500">{virtualRow.index + 1}</div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold">
                        {coin.symbol.slice(0, 2)}
                      </div>
                      <span className="font-semibold text-white">
                        {coin.symbol}
                      </span>
                    </div>

                    <div>
                      <div className="font-semibold">
                        ${price.toLocaleString()}
                      </div>
                      <div
                        className={`text-xs ${
                          isPositive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {isPositive ? "+" : ""}
                        {change.toFixed(2)}%
                      </div>
                    </div>

                    <div className="text-green-400">
                      ${high.toLocaleString()}
                    </div>

                    <div className="text-red-400">${low.toLocaleString()}</div>

                    <div className="text-right pr-6 text-gray-400">
                      {volume.toLocaleString()}
                    </div>
                  </div>

                  {/* Mobile Card */}
                  <div className="md:hidden px-4 py-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold">
                          {coin.symbol.slice(0, 2)}
                        </div>
                        <span className="font-semibold text-white">
                          {coin.symbol}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="font-semibold">
                          ${price.toLocaleString()}
                        </div>
                        <div
                          className={`text-xs ${
                            isPositive ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {isPositive ? "+" : ""}
                          {change.toFixed(2)}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>
                        H:{" "}
                        <span className="text-green-400">
                          ${high.toLocaleString()}
                        </span>
                      </span>
                      <span>
                        L:{" "}
                        <span className="text-red-400">
                          ${low.toLocaleString()}
                        </span>
                      </span>
                      <span>Vol: {volume.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarketsTable;
