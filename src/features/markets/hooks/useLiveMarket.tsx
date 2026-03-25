import { useEffect, useRef, useState } from "react";

export const useLiveMarket = () => {
  const [liveData, setLiveData] = useState<Record<string, any>>({});
  const buffer = useRef<Record<string, any>>({});

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    ws.onmessage = (event) => {
      const updates = JSON.parse(event?.data);

      updates?.forEach((coin: any) => {
        buffer.current[coin?.s] = {
          lastPrice: coin?.c,
          highPrice: coin?.h,
          lowPrice: coin?.l,
          volume: coin?.v,
          priceChangePercent: coin?.P,
        };
      });
    };

    const interval = setInterval(() => {
      if (Object.keys(buffer.current)?.length) {
        setLiveData((prev) => ({
          ...prev,
          ...buffer.current,
        }));
        buffer.current = {};
      }
    }, 100);

    return () => {
      ws.close();
      clearInterval(interval);
    };
  }, []);

  return liveData;
};