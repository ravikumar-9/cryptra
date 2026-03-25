import { useEffect, useRef, useState } from "react";
import {
  createChart,
  type IChartApi,
  CandlestickSeries,
  type CandlestickData,
} from "lightweight-charts";
import { useParams } from "react-router-dom";

type Interval = "1m" | "5m" | "15m" | "1h" | "4h" | "1d";

const intervals: Interval[] = ["1m", "5m", "15m", "1h", "4h", "1d"];

const intervalLimits: Record<Interval, number> = {
  "1m": 1440,
  "5m": 288,
  "15m": 96,
  "1h": 24,
  "4h": 42,
  "1d": 30,
};

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<any>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const candlesRef = useRef<CandlestickData[]>([]);

  const [interval, setInterval] = useState<Interval>("1m");
  const { symbol } = useParams();

  const safeSymbol = symbol?.toLowerCase() || "btcusdt";

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { color: "#000000" },
        textColor: "#d1d5db",
      },
      grid: {
        vertLines: { color: "#1f2937" },
        horzLines: { color: "#1f2937" },
      },
    });

    const series = chart.addSeries(CandlestickSeries, {});
    chartRef.current = chart;
    seriesRef.current = series;

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current!.clientWidth,
        height: chartContainerRef.current!.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  const fetchKlines = async (): Promise<CandlestickData[]> => {
    const limit = intervalLimits[interval];

    const res = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${safeSymbol.toUpperCase()}&interval=${interval}&limit=${limit}`
    );

    const data = await res.json();

    return data.map((k: any) => ({
      time: k[0] / 1000,
      open: parseFloat(k[1]),
      high: parseFloat(k[2]),
      low: parseFloat(k[3]),
      close: parseFloat(k[4]),
    }));
  };

  const connectSocket = () => {
    if (socketRef.current) socketRef.current.close();

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${safeSymbol}@kline_${interval}`
    );

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      const k = msg.k;

      const candle: CandlestickData = {
        time: k.t / 1000,
        open: parseFloat(k.o),
        high: parseFloat(k.h),
        low: parseFloat(k.l),
        close: parseFloat(k.c),
      };

      const current = candlesRef.current;
      const last = current[current.length - 1];

      if (last && last.time === candle.time) {
        current[current.length - 1] = candle;
      } else {
        current.push(candle);
        const limit = intervalLimits[interval];
        if (current.length > limit) current.shift();
      }

      candlesRef.current = current;
      seriesRef.current?.update(candle);
    };

    ws.onclose = () => setTimeout(connectSocket, 2000);
    ws.onerror = () => ws.close();

    socketRef.current = ws;
  };

  useEffect(() => {
    if (!seriesRef.current) return;

    const load = async () => {
      const data = await fetchKlines();
      candlesRef.current = data;
      seriesRef.current.setData(data);
      connectSocket();
    };

    load();

    return () => socketRef.current?.close();
  }, [safeSymbol, interval]);

  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        <h2 className="text-lg md:text-xl font-semibold text-white">
          {safeSymbol.toUpperCase()} Chart
        </h2>

        <div className="flex overflow-x-auto no-scrollbar gap-2 bg-black/40 border border-gray-800 rounded-xl p-1">
          {intervals.map((int) => (
            <button
              key={int}
              onClick={() => setInterval(int)}
              className={`shrink-0 px-3 py-1.5 text-sm rounded-lg transition ${
                interval === int
                  ? "bg-green-500 text-black font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {int}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div
        ref={chartContainerRef}
        className="w-full h-75 sm:h-100 md:h-125 bg-black/40 border border-gray-800 rounded-2xl"
      />
    </div>
  );
}