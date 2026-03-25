import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Cryptra logo"
            className="w-8 h-8 rounded-md shadow-md"
          />
          <span className="text-xl font-semibold tracking-tight">
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Cryp
            </span>
            <span className="text-white">tra</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition">
            Dashboard
          </Link>
          <Link to="/markets" className="hover:text-white transition">
            Markets
          </Link>
        </div>

        <Link
          to="/markets"
          className="hidden md:inline-block px-4 py-2 text-sm rounded-lg bg-green-500 text-black font-medium hover:scale-105 transition"
        >
          Explore
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Dashboard
          </Link>
          <Link
            to="/markets"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Markets
          </Link>
          <Link
            to="/markets"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-lg bg-green-500 text-black font-medium text-center"
          >
            Explore
          </Link>
        </div>
      )}
    </nav>
  );
}
