import { Routes, Route } from "react-router-dom";
import Dashboard from "./features/Dashboard/pages/dashboard";
import { Navbar } from "./components/layout/Navbar";
import { QueryProvider } from "./providers/queryClientProvider";
import Markets from "./features/markets/pages/markets";
import LiveChart from "./features/coinDetails/pages/coinLiveData";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 text-white">
      <QueryProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/coin-details/:symbol" element={<LiveChart/>}/>
        </Routes>
      </QueryProvider>
    </div>
  );
}

export default App;
