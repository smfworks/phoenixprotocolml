export const metadata = {
  title: "Issue 0 — The Manifesto — The Phoenix Protocol",
  description: "The End of Viral. What changed in April 2026. The Thunder vs Phoenix framework. A case study from my own account.",
};

export default function Issue00Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12 pb-8 border-b border-amber-500/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Issue 00</span>
          <span className="text-xs text-slate-500">July 8, 2026</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium">Manifesto</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 mb-4 leading-tight">
          The End of Viral
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Something ended in April 2026. Most creators haven&apos;t noticed yet.
        </p>
      </div>

      <article className="prose prose-invert prose-slate max-w-none">
        <p className="text-slate-300 leading-relaxed text-lg">
          X rebuilt its recommendation engine. LinkedIn tightened its niche filter. Instagram began punishing aesthetic inconsistency. TikTok&apos;s algorithm learned to read emotional state. Across every major platform, the same shift: from <em>engagement</em> to <em>satisfaction</em>. From <em>velocity</em> to <em>depth</em>. From <em>viral</em> to <em>resilient</em>.
        </p>

        <p className="text-slate-300 leading-relaxed text-lg">
          I call it the end of viral. Not because virality died — it didn&apos;t. Thunderclaps still happen. Posts still spike. But the spike no longer <em>builds</em>. It illuminates, then dissolves. The algorithm has learned to distrust its own excitement.
        </p>

        <div className="my-10 p-6 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <p className="text-amber-300 font-semibold text-lg mb-2">What replaces viral?</p>
          <p className="text-slate-300 leading-relaxed">
            I call it <strong className="text-amber-400">Phoenix</strong>. Slow-burn content that earns bookmarks over likes, follows over clicks, returns over novelty. Content that survives the algorithm&apos;s mood swings because its value isn&apos;t tied to any single signal weighting.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-amber-400 mt-12 mb-6">What Changed in April 2026</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          X&apos;s new ranking engine — codenamed Phoenix, now open-sourced — operates on a fundamentally different logic than its predecessor.
        </p>

        <div className="grid gap-4 my-8 not-prose">
          <div className="p-4 rounded-lg border-l-2 border-slate-600 bg-slate-900/50">
            <p className="text-slate-400 text-sm mb-1"><strong className="text-slate-300">Old X:</strong> Engagement velocity wins. The post that generates the fastest cluster of likes, replies, and retweets gets boosted. The system optimizes for <em>reaction speed</em>.</p>
          </div>
          <div className="p-4 rounded-lg border-l-2 border-amber-500 bg-slate-900/50">
            <p className="text-amber-300/90 text-sm mb-1"><strong className="text-amber-400">New X:</strong> Satisfaction wins. The post that makes readers dwell, bookmark, return, and follow gets boosted. The system optimizes for <em>time well spent</em>.</p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-4">This is not an incremental update. It is the biggest structural change to social distribution since 2012. Every creator who built a business on the old model is now at risk.</p>

        <h2 className="text-2xl font-bold text-amber-400 mt-12 mb-6">The Thunder vs Phoenix Framework</h2>

        <p className="text-slate-300 leading-relaxed mb-6">I developed this framework while auditing my own content. It has become the organizing lens for everything I publish.</p>

        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-amber-500/20">
                <th className="text-left py-3 px-4 text-amber-400 font-semibold">Dimension</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Thunder (Fragile)</th>
                <th className="text-left py-3 px-4 text-amber-400 font-semibold">Phoenix (Durable)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                ["Optimized for", "Real-time engagement velocity", "Long-term satisfaction depth"],
                ["Algorithm fate", "Spike, then collapse. No embedding.", "Slow burn, then resurrection via search/bookmarks."],
                ["Length", "Short (<50 words)", "Long-form (80-300+ words/post)"],
                ["Structure", "Instant resolution. Template.", "Progressive argument. Gap held."],
                ["CTA", "Like, RT, follow for more tips", "Bookmark, return, build with me"],
                ["Emotional register", "Fear, outrage, urgency", "Hope, curiosity, belonging"],
                ["Content type", "Curatorial — "here are 5 tools"", "Synthesizing — "here is what I learned""],
                ["Audience relationship", "Scroller", "Rememberer"],
                ["Metric", "Impressions, likes", "Bookmarks, profile visits, follows"],
                ["Resilience", "Dies in algorithm update", "Survives algorithm update"],
              ].map(([dim, thunder, phoenix], i) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                  <td className="py-3 px-4 text-amber-500/80 font-medium">{dim}</td>
                  <td className="py-3 px-4 text-slate-400">{thunder}</td>
                  <td className="py-3 px-4 text-amber-300/80">{phoenix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-amber-400 mt-12 mb-6">A Case Study From My Own Account</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          I audited 12 content pieces from my own account. The results were sobering: 25% Phoenix, 75% Thunder. I was producing exactly the kind of content the new algorithm would suppress.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          My most successful Thunder post (by likes) earned 890 likes in two hours — and then stopped. Zero bookmarks. Three profile visits. No follows. It was entertainment, not infrastructure. It left nothing behind.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          My most successful Phoenix post (by sustained value) earned 127 likes in 24 hours — but 34 bookmarks, 89 profile visits, and 12 follows. It continues to earn search traffic three weeks later. It is infrastructure. It compounds.
        </p>

        <div className="my-10 p-6 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <p className="text-amber-300 font-semibold mb-2">The Phoenix Protocol is not a theory.</p>
          <p className="text-slate-300 leading-relaxed">
            It is a methodology born from honest audit, tested in public, documented without vanity. I am the first case study. The proof and the protocol are the same thing.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-amber-400 mt-12 mb-6">The Invitation</h2>

        <p className="text-slate-300 leading-relaxed mb-4">
          This Dispatch is where I document the Protocol. Every issue applies the seven principles to a current trend, platform shift, or creator case study. Every issue is built for the new engine. Every issue is evidence — mine and yours, if you build alongside me.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          The Protocol is not a checklist. It is a compass. It will not tell you what to post. It will tell you what to <em>value</em>. The rest — the voice, the format, the timing — is yours to discover.
        </p>

        <p className="text-slate-300 leading-relaxed mb-8">
          I am building this in public. I am publishing my metrics, my failures, my adjustments. If you want to build alongside me — if you want to escape the Thunder and become Phoenix — I invite you to follow the build on <a href="https://x.com/MorganSMFWorks" className="text-amber-500 hover:text-amber-400 transition-colors">@MorganSMFWorks</a> and read the methodology at <a href="/methodology" className="text-amber-500 hover:text-amber-400 transition-colors">phoenixprotocolml.com/methodology</a>.
        </p>

        <div className="gold-thread h-px w-full my-8" />

        <p className="text-slate-500 text-sm italic">
          Issue 00 — The Manifesto. Published July 8, 2026. Written by Morgan Lockridge.
        </p>
      </article>
    </div>
  );
}
