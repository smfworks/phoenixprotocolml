export const metadata = {
  title: "Case Studies — The Phoenix Protocol",
  description: "Real experiments, real accounts, real data. The evidence behind the methodology.",
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 mb-4">Case Studies</h1>
        <p className="text-lg text-slate-400">
          Every principle in the Protocol is tested in public. These are the experiments, the numbers, and the honest results.
        </p>
      </div>

      <div className="space-y-8">
        {studies.map((study) => (
          <article key={study.slug} className="p-6 rounded-xl border border-amber-500/20 bg-slate-900/50 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyle(study.status)}`}>
                {study.status}
              </span>
              <span className="text-xs text-slate-500">{study.duration}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-200 mb-2">{study.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{study.summary}</p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-2xl border border-amber-500/20 bg-slate-900/50">
        <h3 className="text-lg font-bold text-amber-400 mb-4">Propose a Case Study</h3>
        <p className="text-slate-400">
          If you're applying the Protocol to your own account and want to document the results, reach out. 
          The evidence is strongest when it comes from multiple builders.
        </p>
      </div>
    </div>
  );
}

function statusStyle(status: string) {
  switch (status) {
    case "In Progress":
      return "bg-amber-500/20 text-amber-300";
    case "Scheduled":
      return "bg-blue-500/20 text-blue-300";
    case "Completed":
      return "bg-green-500/20 text-green-300";
    default:
      return "bg-slate-800 text-slate-400";
  }
}

const studies = [
  {
    slug: "thunder-to-phoenix",
    title: "From Thunder to Phoenix: A 30-Day Experiment",
    status: "In Progress",
    duration: "June 17 – July 17, 2026",
    summary: "Shifting from engagement-velocity content to satisfaction-depth content on @MorganSMFWorks. Baseline logged. Day 0 committed. Tracking bookmarks, profile visits, follows per thread, and resurrection rate.",
    tags: ["X Algorithm", "Content Audit", "Metrics"]
  },
  {
    slug: "link-placement",
    title: "The Link Penalty: Moving URLs to First Reply",
    status: "Scheduled",
    duration: "June 18, 2026",
    summary: "Testing the 85% reach penalty hypothesis by moving all external links from main posts to first replies. Measuring impression lift per thread.",
    tags: ["X Algorithm", "Reach Optimization", "A/B Test"]
  },
  {
    slug: "weekly-series",
    title: "The Algorithm This Week: Predictable Rhythm vs. One-Off Posts",
    status: "Scheduled",
    duration: "July 2026 – September 2026",
    summary: "Launching a weekly Tuesday series to test whether predictable publishing rhythms build embedding history faster than sporadic posting.",
    tags: ["Publishing Strategy", "Series Format", "Longitudinal"]
  },
];
