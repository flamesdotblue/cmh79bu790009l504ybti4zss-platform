import { Cpu, Database, Lock } from 'lucide-react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Three‑stage architecture</h2>
          <p className="mt-3 text-neutral-300">Defense‑in‑depth across detection, integrity, and encryption. Each stage is independently verifiable and designed for strict financial compliance.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Stage
            number="01"
            title="ML anomaly detection"
            icon={Cpu}
            description="Real‑time scoring for transactions, sessions, and devices. Uses feature stores and risk policies to quarantine threats before settlement."
            bullets={[
              'Online + batch pipelines',
              'Model registry + rollbacks',
              'Human‑in‑the‑loop reviews',
            ]}
          />

          <Stage
            number="02"
            title="Blockchain audit trail"
            icon={Database}
            description="Immutable, append‑only ledger captures cryptographic proofs of events, policies, and approvals for regulator‑ready evidence."
            bullets={[
              'Tamper‑evident records',
              'Selective disclosure for auditors',
              'Chain‑anchored integrity checks',
            ]}
          />

          <Stage
            number="03"
            title="Open encryption firmware"
            icon={Lock}
            description="Auditable, open‑source firmware with hardware‑backed key management. Enforces least‑privilege and zero‑trust boundaries."
            bullets={[
              'HSM/KMS integration',
              'FIPS/CC validation paths',
              'Reproducible + signed builds',
            ]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6">
          <p className="text-emerald-300 text-sm">
            Interoperability: Use our API gateway to plug stages into existing cores (Temenos, Mambu, Finacle) without replacing your stack.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stage({ number, title, description, bullets, icon: Icon }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="size-11 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
            <Icon className="size-5" />
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest text-neutral-400">{number}</div>
          <h3 className="mt-1 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-neutral-300">{description}</p>
          <ul className="mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-neutral-300 flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
