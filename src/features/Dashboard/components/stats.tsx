export function StatsSection() {
    const stats = [
      { label: "Coins Tracked", value: "500+" },
      { label: "Live Updates", value: "Real-Time" },
      { label: "Timeframes", value: "6 Intervals" },
      { label: "Data Accuracy", value: "High Precision" },
    ];
  
    return (
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }