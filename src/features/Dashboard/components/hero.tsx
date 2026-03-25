import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export function HeroSection() {
  return (
    <section className="relative text-center px-6 py-28 max-w-5xl mx-auto overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-green-500/10 via-transparent to-blue-500/10 blur-3xl" />

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        See the Market Move.
        <br />
        <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Trade with Clarity.
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
        Cryptra gives you real-time crypto data, powerful charts, and market insights—
        so you can understand trends instantly and act with confidence.
      </p>

      <div className="mt-10">
        <Link to="/markets">
          <Button size="lg" className="px-8 py-6 text-lg">
            Explore Markets
          </Button>
        </Link>
      </div>
    </section>
  );
}