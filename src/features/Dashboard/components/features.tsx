import { Card, CardContent } from "../../../components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "Live Market Data",
      desc: "Track real-time prices, 24h change, volume, high & low.",
      icon: "⚡",
    },
    {
      title: "Advanced Charts",
      desc: "Candlestick charts with multiple timeframes.",
      icon: "📊",
    },
    {
      title: "Smart Insights",
      desc: "Top gainers, losers, and trending coins.",
      icon: "🚀",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center mb-16">
        Everything You Need
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Card key={i} className="bg-black/40 border border-gray-800">
            <CardContent className="p-8 text-center">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}