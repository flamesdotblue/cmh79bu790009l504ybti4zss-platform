import Spline from '@splinetool/react-spline';
import { Shield, Lock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 mb-6">
              <Shield size={16} />
              <span className="text-xs tracking-wide">Banking-grade cybersecurity framework</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Keep banking secure and confidential with a 3‑stage zero‑trust core
            </h1>
            <p className="mt-5 text-neutral-300 text-lg md:text-xl max-w-xl">
              AegisCore combines machine learning, blockchain audit trails, and open‑source encryption firmware to protect digital banking from advanced threats.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-900 px-5 py-3 font-medium transition"
              >
                Request a demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 hover:border-white/25 hover:bg-white/5 px-5 py-3 font-medium text-white transition"
              >
                Explore architecture
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><Lock className="size-4 text-emerald-400" />FIPS‑ready crypto</div>
              <div className="flex items-center gap-2"><Shield className="size-4 text-emerald-400" />Zero‑knowledge privacy</div>
            </div>
          </div>
          <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
            <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
