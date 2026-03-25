export const fetchCoins = async () => {
    const res = await fetch(
      "https://api.binance.com/api/v3/ticker/24hr"
    );
    return res.json();
  };