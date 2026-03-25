export function WhyCryptra() {
  const points = [
    {
      title: "Clarity Over Noise",
      desc: "A clean, distraction-free interface that helps you focus only on what matters.",
    },
    {
      title: "Real-Time Performance",
      desc: "Live price updates and charts that move with the market—no delays.",
    },
    {
      title: "Built for Every Trader",
      desc: "Whether you're exploring or analyzing deeply, Cryptra adapts to your flow.",
    },
    {
      title: "All-in-One Experience",
      desc: "Markets, charts, and insights—everything in one seamless place.",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Why Cryptra
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Designed to simplify market analysis without compromising depth.
        Cryptra brings clarity, speed, and insight into one unified experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        {points.map((point, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-800 bg-black/40 hover:border-green-500/40 transition"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {point.title}
            </h3>
            <p className="text-gray-400 text-sm">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}