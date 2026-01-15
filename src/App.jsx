import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'; // Your existing Navbar

function App() {
  const location = useLocation();

  return (
    <div className='relative w-full min-h-screen bg-[#0a0a0b] text-white selection:bg-[#BAA0F8]/30 selection:text-[#BAA0F8]'>
      
      {/* 1. Global Neural Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(186,160,248,0.05),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* 2. Global System Status Indicator */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:block">
        <div className="flex items-center gap-3 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
            System Optimized: AI/ML Ready
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;