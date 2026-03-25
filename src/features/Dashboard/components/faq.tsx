export function FAQSection() {
    const faqs = [
      {
        q: "Is it free?",
        a: "Yes, completely free to use.",
      },
      {
        q: "Data source?",
        a: "Powered by Binance API.",
      },
      {
        q: "Mobile support?",
        a: "Fully responsive.",
      },
    ];
  
    return (
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12">FAQ</h2>
  
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-800 pb-4">
              <h3>{f.q}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }