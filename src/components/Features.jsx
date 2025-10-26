import { Cpu, Database, Fingerprint, Key, Check } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Adaptive ML detection',
    desc: 'Continuously learns transaction patterns to flag anomalies and prevent fraud in real time.',
    points: ['Federated signals', 'Drift monitoring', 'Explainable insights'],
  },
  {
    icon: Database,
    title: 'Immutable audit layer',
    desc: 'Blockchain ledger ensures tamper‑evident records for compliance and post‑incident forensics.',
    points: ['Merkle proofs', 'Selective disclosure', 'Full traceability'],
  },
  {
    icon: Key,
    title: 'Open crypto firmware',
    desc: 'Transparent, verifiable encryption firmware with hardware‑backed keys for zero‑trust ops.',
    points: ['HSM integration', 'FIPS pathways', 'Reproducible builds'],
  },
  {
    icon: Fingerprint,
    title: 'Privacy by design',
    desc: 'Zero‑knowledge workflows and fine‑grained policy controls protect sensitive identities.',
    points: ['ZK policy checks', 'PII minimization', 'Role‑based secrets'],
  },
];

export default function Features() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Security that scales with your core banking</h2>
          <p className="mt-3 text-neutral-300">Purpose‑built for regulated fintech and banks: auditable, explainable, and interoperable.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 hover:border-emerald-500/30 transition">
              <div className="size-11 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
              <ul className="mt-4 space-y-2">
                {f.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="mt-0.5 size-4 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
