import Link from "next/link";

export const metadata = {
  title: "Dispatch — The Phoenix Protocol",
  description: "The Phoenix Dispatch: weekly essays on platform shifts, creator strategy, and the mechanics of attention.",
};

export default function DispatchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 mb-4">The Phoenix Dispatch</h1>
        <p className="text-lg text-slate-400">
          Weekly essays applying the Protocol to current trends, platform shifts, and creator case studies. 
          Every issue is evidence — built for the new engine, documented in public.
        </p>
      </div>

      <div className="space-y-8">
        {issues.map((issue) => (
          <article key={issue.number} className="p-6 rounded-xl border border-amber-500/20 bg-slate-900/50 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Issue {issue.number}</span>
              <span className="text-xs text-slate-500">{issue.date}</span>
              {issue.status === "coming-soon" && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">Coming Soon</span>
              )}
              {issue.status === "live" && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 font-medium">Live</span>
              )}
            </div>
            <h2 className="text-xl font-bold text-slate-200 mb-2">{issue.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{issue.summary}</p>
            {issue.href && (
              <Link href={issue.href} className="text-sm text-amber-500 hover:text-amber-400 transition-colors font-medium">
                Read Issue {issue.number} →
              </Link>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl border border-amber-500/20 bg-slate-900/50">
        <h3 className="text-lg font-bold text-amber-400 mb-4">Subscribe</h3>
        <p className="text-slate-400 mb-4">
          The Dispatch drops every Tuesday. No spam. No hacks. Just signal.
        </p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            disabled
          />
          <button 
            className="px-4 py-2 bg-amber-500 text-slate-950 font-semibold rounded-lg opacity-50 cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2">Newsletter infrastructure in progress. For now, follow the build on X.</p>
      </div>
    </div>
  );
}

const issues = [
  {
    number: "00",
    title: "The Manifesto Issue",
    date: "July 8, 2026",
    status: "live",
    summary: "The End of Viral. What changed in April 2026. The Thunder vs Phoenix framework. A case study from my own account. The invitation to build.",
    href: "/dispatch/issue-00",
  },
  {
    number: "01",
    title: "Embedding: How the Algorithm Reads You, and How to Write Back",
    date: "July 15, 2026",
    status: "coming-soon",
    summary: "Reply depth is now a first-class ranking signal. How to use conversation as distribution. The 30-minute daily reply strategy.",
    href: null,
  },
  {
    number: "02",
    title: "Recollection: Building a Brand That Remembers",
    date: "July 22, 2026",
    status: "coming-soon",
    summary: "Bergson's two memories applied to brand strategy. How to build recollective memory instead of habit loops. The trust ledger.",
    href: null,
  },
];
