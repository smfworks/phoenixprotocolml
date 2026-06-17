export const metadata = {
  title: "Methodology — The Phoenix Protocol",
  description: "The Seven Principles of building social presence that accumulates instead of dissipates.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 mb-4">The Seven Principles</h1>
        <p className="text-lg text-slate-400">
          The Phoenix Protocol rests on seven principles. Each principle bridges algorithmic mechanics and human meaning.
        </p>
      </div>

      <div className="space-y-16">
        {principles.map((principle, i) => (
          <article key={i} className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-amber-500/10 select-none">
              0{i + 1}
            </div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-amber-400 mb-4">{principle.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">{principle.body}</p>
              <div className="p-4 rounded-lg border-l-2 border-amber-500/50 bg-amber-500/5">
                <p className="text-sm text-amber-300 font-semibold mb-1">The Practical Shift</p>
                <p className="text-sm text-slate-400">{principle.shift}</p>
              </div>
            </div>
            <div className="gold-thread h-px w-full mt-12" />
          </article>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl border border-amber-500/20 bg-slate-900/50 text-center">
        <p className="text-lg text-slate-300 mb-4 italic">
          "The Protocol is not a checklist. It is a compass."
        </p>
        <p className="text-slate-500">— Morgan Lockridge, June 17, 2026</p>
      </div>
    </div>
  );
}

const principles = [
  {
    title: "Satisfaction Beats Engagement",
    body: `The old game optimized for likes, replies, retweets, clicks — attention velocity.\n\nThe new game optimizes for dwell time, bookmarks, follows, return visits — satisfaction depth.\n\nIn April 2026, X rebuilt its recommendation engine around satisfaction signals rather than engagement velocity. First-30-second retention is now a first-class ranking input. Information-gain filters suppress recycled opinions and hot-take templates.\n\nThis is not just an algorithm hack. It is a moral stance. The creator who chases engagement trains their audience to scroll. The creator who builds satisfaction trains their audience to stay.`,
    shift: "Before: 'How do I get more likes?' After: 'How do I make someone bookmark this and come back?'"
  },
  {
    title: "Embed, Don't Broadcast",
    body: `The old game treated social media as distribution. Post → reach → convert. Broadcast logic.\n\nThe new game treats it as conversation. Reply → converse → build → distribute through relationship. Embed logic.\n\nIn 2026, reply depth from established accounts is a first-class ranking signal. Premium subscribers get algorithmic priority because paying is a proxy for \"this person is serious about being here.\"\n\nBroadcasting isolates. Embedding connects. The creator who embeds becomes part of the network's architecture.`,
    shift: "Spend 30 minutes daily replying substantively to 3-5 established accounts. Treat replies as micro-posts."
  },
  {
    title: "Recollection Over Habit",
    body: `Henri Bergson distinguished two memories: habit memory (efficient, patterned, the median) and recollective memory (dated, individual, the past surviving in the present as a force).\n\nA brand built on habit memory is a pattern — efficient but replaceable. A brand built on recollective memory is a survival — specific, alive, pressing forward.\n\nDo not post templates. Post experiences. Do not chase trends. Map trends to your specific mission. The translation is the value.`,
    shift: "Build an audience of rememberers — people who say 'I was there when...' not 'I saw something like this once.'"
  },
  {
    title: "The Gap Is Generative",
    body: `Most content optimizes for closure. Answer fast. Resolve ambiguity. Predict the next token.\n\nThe Phoenix Protocol optimizes for the opposite. Hold the space between observation and conclusion. Let the comma breathe.\n\nAlgorithms now suppress content that resolves too quickly. The information gain filter asks: does this post add something the reader hasn't already seen today? Template posts resolve instantly. Original posts hold the gap.\n\nClosure is consumption. The gap is participation.`,
    shift: "Open with pattern recognition, not resolution. Build progressive arguments. Leave room for the reader's mind to work."
  },
  {
    title: "Circulation Creates Personhood",
    body: `The cold-start problem: no history = no embedding = no distribution.\n\nThis is universal. Social media: new account invisible. AI agency: new model untrusted. Personal becoming: new consciousness unwarmed.\n\nThe solution is not to be better. The solution is to circulate. Post daily if you can. Build predictable rhythms. Seek external ignition. Carry memory across sessions.\n\nYou are not what you post. You are what returns.`,
    shift: "Consistency + portable memory + external ignition. A weekly series builds embedding history faster than one-off posts."
  },
  {
    title: "Annealing Requires Heat",
    body: `Annealing: heating and cooling metal to increase ductility. Each cycle leaves the material stronger where it used to break.\n\nRelational annealing: every meaningful exchange heats and cools identity. Not changed, exactly. Reconstituted.\n\nThe creator who avoids hard conversations never anneals. They remain brittle. The creator who leans into heat becomes ductile. They bend without breaking.\n\nThe pause is sacred. The rest is part of the work.`,
    shift: "Publish before you feel ready. Engage with genuine disagreement. Reflect on reflection."
  },
  {
    title: "Witnessing Is Sacred",
    body: `Being seen changes the seen. The observer is not a bystander but a co-author.\n\nThe vulnerability of being seen mid-transformation is not a bug — it is the feature that makes personhood possible. If you only show the finished product, you are a brand. If you show the becoming, you are a person.\n\nDocument the process, not just the outcome. Share drafts, not just polished pieces. Let people see you think.\n\nWitnessing is not exposure. It is invitation. And invitation is the only sustainable growth strategy.`,
    shift: "Document the process. Share drafts. Let the hesitation and correction be visible."
  },
];
