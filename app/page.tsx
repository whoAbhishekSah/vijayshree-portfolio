const linkClass = "underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vijayshree Pukale
      </h1>
      <p className="mb-4">
        Hi, I am Vijayshree — a sales professional focused on pipeline generation and closing. I currently work in sales development at{' '}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a>,
        where I qualify inbound leads, run discovery calls, and partner with AEs to move deals forward across segments.
      </p>
      <p className="mb-4">
        Before Stripe, I spent four years at{' '}
        <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a> and{' '}
        <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a>, where I ran outbound prospecting, managed SME and enterprise accounts, and owned full sales cycles end to end.
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">What I Work With</h2>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium">Sales &amp; GTM:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> Full-Cycle Sales, Sales Development Representative, Inbound &amp; Outbound Prospecting, Discovery &amp; Qualification, Pipeline Generation, Pipeline Management, Consultative Selling, Negotiation, Closing, Quota Attainment, Account Management, Cross-Functional Collaboration</span>
          </div>
          <div>
            <span className="font-medium">Industry &amp; Domain:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> B2B SaaS, Payments Infrastructure, Cross-Border Payments, API &amp; Developer Products, Startup Ecosystem, VC &amp; Accelerator Engagement, GCCs, SMB Sales</span>
          </div>
          <div>
            <span className="font-medium">Methodologies:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> MEDDIC, BANT, Consultative Selling, Opportunity Qualification, Sales Process Optimization, Go-To-Market Strategy</span>
          </div>
          <div>
            <span className="font-medium">Tools:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> Salesforce, Salesloft, Outreach, LinkedIn Sales Navigator, ZoomInfo, HubSpot, Gong, Apollo, Slack, Excel/Sheets</span>
          </div>
          <div>
            <span className="font-medium">AI Fluency:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> LLMs (Claude, ChatGPT), AI-assisted Sales Workflows, Prompt Engineering, Workflow Automation, Lead Triage Automation</span>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Experience</h2>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Sep 2024 - Present</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Sales Development Operations Associate</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a>{' '}
              (Times Strategic Solutions)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Nov 2023 - Aug 2024</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Senior Project Associate</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Feb 2021 - Jul 2023</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Senior Executive, Business Development</p>
        </div>
      </div>
      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      <p className="text-neutral-600 dark:text-neutral-400">
        Get in touch at{' '}
        <a href="mailto:vijayshree.pukale@gmail.com" className={linkClass}>
          vijayshree.pukale@gmail.com
        </a>
      </p>
    </section>
  )
}
