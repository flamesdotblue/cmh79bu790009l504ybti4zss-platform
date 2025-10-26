import { ArrowRight, Shield } from 'lucide-react';

export default function CTA() {
  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-neutral-950 p-10">
          <div className="absolute -inset-1 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(16,185,129,0.25),transparent)] pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 mb-4">
              <Shield size={16} />
              <span className="text-xs tracking-wide">SOC 2 • ISO 27001 • PSD2‑ready</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to modernize your bank’s security posture?</h3>
            <p className="mt-2 text-neutral-300 max-w-2xl">See how our ML, blockchain, and open firmware stack integrates with your core and reduces audit overhead from day one.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-900 px-5 py-3 font-medium transition"
              >
                Book a discovery call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 hover:border-white/25 hover:bg-white/5 px-5 py-3 font-medium text-white transition"
              >
                Download whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
