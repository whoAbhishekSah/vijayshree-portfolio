export const metadata = {
  title: 'Now',
  description: 'What Vijayshree is focused on right now.',
}

export default function Page() {
  return (
    <section className="max-w-2xl">
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        Now
      </p>
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">
        What I&apos;m focused <em>on</em>
      </h1>
      <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-10">
        Last updated March 2026
      </p>

      <hr className="border-neutral-200 dark:border-neutral-800 mb-8" />

      {/* Learning */}
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        Learning
      </p>
      <h2 className="font-serif text-2xl text-neutral-900 dark:text-neutral-100 mb-3">
        The technical side of sales
      </h2>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
        Working at Stripe has shown me how much better sales conversations go when you actually understand the product. So I&apos;ve been teaching myself the foundations.
      </p>
      <ul className="flex flex-col gap-3 mt-4">
        {[
          { tag: 'JSON & HTTP', desc: 'How data is structured and moves between systems — request/response formats, status codes, headers.' },
          { tag: 'API docs', desc: "Reading Stripe's API documentation to understand endpoints, parameters, and authentication flows." },
          { tag: 'Dev experience', desc: 'Understanding what makes a developer product good, so I can hold better discovery conversations with technical buyers.' },
        ].map(({ tag, desc }) => (
          <li key={tag} className="flex gap-3 items-start">
            <span className="text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded px-2 py-1 whitespace-nowrap mt-0.5">
              {tag}
            </span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{desc}</span>
          </li>
        ))}
      </ul>

      <hr className="border-neutral-200 dark:border-neutral-800 my-8" />

      {/* Why */}
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        Why it matters
      </p>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        When I can read API docs and understand what a prospect&apos;s integration might look like, I ask sharper questions during discovery. I can tell the difference between a quick integration and a complex one — and that helps me qualify on technical fit, not just budget and timeline.
      </p>

      <hr className="border-neutral-200 dark:border-neutral-800 my-8" />

      {/* At Work */}
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        At work
      </p>
      <h2 className="font-serif text-2xl text-neutral-900 dark:text-neutral-100 mb-2">
        Stripe Delivery Center, Bangalore
      </h2>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
        Running inbound qualification and partnering with SDRs and AEs across APAC and EMEA.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {[
          { label: 'Day to day', text: 'Managing inbound leads, running discovery calls, maintaining SLA and quality standards' },
          { label: 'Beyond the queue', text: 'Leading discovery with SDRs/AEs across APAC to identify workflows SDC can centralize' },
          { label: 'Built', text: 'LLM-assisted triage workflow for initial lead screening and prioritization' },
          { label: 'Framework', text: 'MEDDIC for evaluating technical fit, buying intent, and commercial readiness' },
        ].map(({ label, text }) => (
          <div key={label} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">{label}</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug">{text}</p>
          </div>
        ))}
      </div>

      {/* Open to */}
      <div className="mt-6 border border-neutral-200 dark:border-neutral-800 rounded-lg px-5 py-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium text-neutral-900 dark:text-neutral-100">Open to opportunities</span> — BDR and AE roles at AI/tech companies where technical curiosity and sales fundamentals both matter.
        </p>
      </div>
    </section>
  )
}
