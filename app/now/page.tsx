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
        Last updated June 2026
      </p>

      <hr className="border-neutral-200 dark:border-neutral-800 mb-8" />

      {/* Learning */}
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        Learning
      </p>
      <h2 className="font-serif text-2xl text-neutral-900 dark:text-neutral-100 mb-3">
        APIs and AI
      </h2>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
        Working at Stripe has shown me how much better sales conversations go when you actually understand the product. So I&apos;ve been going deep on two things shaping modern software: how APIs work, and how AI is changing the way products get built and sold.
      </p>
      <ul className="flex flex-col gap-3 mt-4">
        {[
          { tag: 'JSON & HTTP', desc: 'How data is structured and moves between systems — request/response formats, status codes, headers, authentication.' },
          { tag: 'API docs', desc: "Reading Stripe's and other developer-first API documentation to understand endpoints, parameters, and integration flows." },
          { tag: 'LLMs', desc: 'Hands-on with Claude and ChatGPT — how large language models work, where they shine, and where they fall short.' },
          { tag: 'Prompt engineering', desc: 'Designing prompts and AI-assisted workflows to automate lead triage, research, and repetitive sales tasks.' },
          { tag: 'AI products', desc: 'Following how AI and developer companies build, position, and go to market — so I can sell into that world credibly.' },
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
        When I can read API docs and understand what a prospect&apos;s integration might look like, I ask sharper questions during discovery — and I can tell a quick integration from a complex one, so I qualify on technical fit, not just budget and timeline. The same goes for AI: understanding what LLMs can and can&apos;t do lets me have honest, credible conversations with the AI-native teams I want to sell for.
      </p>

      <hr className="border-neutral-200 dark:border-neutral-800 my-8" />

      {/* At Work */}
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-3">
        At work
      </p>
      <h2 className="font-serif text-2xl text-neutral-900 dark:text-neutral-100 mb-2">
        Stripe, Bangalore
      </h2>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
        Running inbound qualification and partnering with AEs across APAC and EMEA.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {[
          { label: 'Day to day', text: 'Managing inbound leads, running discovery calls, maintaining SLA and quality standards' },
          { label: 'Beyond the queue', text: 'Leading discovery with AEs across APAC to identify workflows Stripe can centralize' },
          { label: 'Built', text: 'LLM-assisted triage workflow for initial lead screening and prioritization' },
          { label: 'Framework', text: 'MEDDIC for evaluating technical fit, buying intent, and commercial readiness' },
        ].map(({ label, text }) => (
          <div key={label} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-1.5">{label}</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug">{text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
