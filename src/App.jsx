import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <Features />
      <Architecture />
      <CTA />
      <footer className="py-10 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} AegisCore Security. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Security</a>
              <a href="#" className="hover:text-white transition">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
