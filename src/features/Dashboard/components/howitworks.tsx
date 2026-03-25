export function HowItWorks() {
    const steps = [
      {
        title: "Explore Markets",
        desc: "Browse all coins with real-time data.",
      },
      {
        title: "Analyze Charts",
        desc: "Switch intervals and study trends.",
      },
      {
        title: "Make Decisions",
        desc: "Use insights to act confidently.",
      },
    ];
  
    return (
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-16">How It Works</h2>
  
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-green-400 text-2xl font-bold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }