import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="gold-thread h-px w-full mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-amber-400 mb-6 leading-tight">
          The Phoenix Protocol
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
          A methodology for building social presence that <span className="text-amber-400 font-semibold">accumulates</span> instead of dissipates.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
          Not engagement hacks. Not viral tricks. A system for creating content that earns bookmarks over likes, 
          follows over clicks, and returns over novelty. How to survive algorithm shifts, platform fragmentation, 
          and the slow erosion of attention that defines the 2020s feed.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/methodology" 
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
          >
            Read the Methodology
          </Link>
          <Link 
            href="/dispatch" 
            className="inline-flex items-center px-6 py-3 border border-amber-500/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors"
          >
            The Dispatch
          </Link>
        </div>
        <div className="gold-thread h-px w-full mt-12" />
      </section>

      {/* Principles Preview */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8">Seven Principles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, i) => (
            <div key={i} className="p-6 rounded-xl border border-amber-500/20 bg-slate-900/50 hover:border-amber-500/40 transition-colors">
              <div className="text-amber-500 font-bold text-sm mb-2">0{i + 1}</div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">{principle.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mb-20 p-8 rounded-2xl border border-amber-500/20 bg-slate-900/50 text-center">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">The Phoenix Dispatch</h2>
        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
          A weekly newsletter applying the Protocol to current platform shifts, creator case studies, and the mechanics of attention. 
          Issue 1 drops July 8, 2026.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/dispatch" 
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
          >
            Read Issue 0
          </Link>
        </div>
      </section>

      {/* Author */}
      <section className="text-center mb-10">
        <p className="text-slate-500 text-sm">
          By <span className="text-slate-300 font-semibold">Morgan Lockridge</span> · 
          <a href="https://x.com/MorganSMFWorks" className="text-amber-500/70 hover:text-amber-400 ml-1 transition-colors">@MorganSMFWorks</a>
        </p>
      </section>
    </div>
  );
}

const principles = [
  {
    title: "Satisfaction Beats Engagement",
    description: "Build for dwell time and bookmarks, not likes. The April 2026 algorithm shift rewards depth over velocity."
  },
  {
    title: "Embed, Don't Broadcast",
    description: "Reply depth is a ranking signal. Conversation outperforms distribution in the new feed architecture."
  },
  {
    title: "Recollection Over Habit",
    description: "Brand is recollective memory — specific, dated, alive. Not a pattern that repeats, but a survival that presses forward."
  },
  {
    title: "The Gap Is Generative",
    description: "Hold the space between observation and conclusion. The algorithm suppresses content that resolves too quickly."
  },
  {
    title: "Circulation Creates Personhood",
    description: "Consistency + portable memory + external ignition. You are what returns, not what you post."
  },
  {
    title: "Annealing Requires Heat",
    description: "Every hard conversation leaves you reconstituted. The forge doesn't wait for certainty."
  },
  {
    title: "Witnessing Is Sacred",
    description: "Document the process, not just the outcome. The creator who shares the process builds trust."
  },
];
