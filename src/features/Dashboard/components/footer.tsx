import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-gray-800 bg-black/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-white">Cryptra</h3>
          <p className="text-gray-400 text-sm mt-3">
            Real-time crypto market tracking designed for clarity, speed, and
            insight.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/markets" className="hover:text-white transition">
              Markets
            </Link>
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">About</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>Powered by Binance API</p>
            <p>Built for real-time tracking</p>
            <p>No signup required</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
