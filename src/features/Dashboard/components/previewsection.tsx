export function PreviewSection() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl mb-6">
        Built for Real-Time Decisions
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Switch between intervals, track price movements, and react instantly.
      </p>

      <img
        src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=1200&q=80"
        alt="Cryptra chart preview"
        className="w-full h-full object-cover rounded-2xl border border-gray-800"
      />
    </section>
  );
}
