const linkClass = "underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      </h1>
      <p className="mb-4">
        Hi, I am Vijayshree. I work at{' '}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a>,
        as a Sales Associate, where I qualify and advance inbound opportunities from SaaS, AI, Ecommerce companies - working directly with engineering leaders, product managers, and founders evaluating payment products.
      </p>
      <p className="mb-4">
        Before Stripe, I was at {' '}
        <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>nasscom</a> and{' '}
        <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a> - doing outbound prospecting, managing SME and enterprise accounts, and running full sales cycles. I am now looking to move into an SDR or AE role at a technology company where I can bring that blend of technical fluency and commercial instinct.
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Impact</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">$70M+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">in projected payment volume influenced through inbound qualification at Stripe</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">24%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">above revenue target at nasscom in FY22–23</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">15-20</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">discovery calls run per week at Stripe</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">88%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">renewal rate across 130–150 managed accounts at asscom</p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">What I Work With</h2>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium">Sales:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> MEDDIC, lead qualification, outbound prospecting, discovery calls, pipeline generation, AE handoffs, co-sell motions</span>
          </div>
          <div>
            <span className="font-medium">Technical context:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> APIs, platform integrations, developer and product buyer qualification, technical fit assessment, LLM-assisted tooling</span>
          </div>
          <div>
            <span className="font-medium">Tools:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> Salesforce, Salesloft, LinkedIn Sales Navigator, ZoomInfo, HubSpot, Gong, Apollo, Outreach</span>
          </div>
          <div>
            <span className="font-medium">Industries:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> SaaS, Fintech, Payments, Ecommerce</span>
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
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Sep 2024 – Present</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Sales Development Operations Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Qualified 200+ inbound CSF and marketing-qualified leads through discovery calls, assessing business model, payment flows, and cross-border requirements across SaaS, AI, e-commerce, and IT services companies - contributing to $70M+ in projected payment processing volume</li>
            <li>Managed ~250 weekly inbound leads, prioritizing and routing qualified opportunities to Account Executives to improve pipeline efficiency</li>
            <li>Supported partner co-sell motions across EMEA and AMER by qualifying partner-sourced leads and enabling structured AE handoffs</li>
            <li>Built LLM-assisted triage workflow to automate initial lead screening, improving prioritization accuracy and reducing manual effort across inbound pipeline</li>
            <li>Led Q1 India inbound qualification analysis across 8,600+ leads, evaluating acquisition sources, industry distribution, business maturity (e.g., pre-revenue), and cross-b</li>
            <li>Designed and implemented an LLM-assisted lead triage workflow, reducing lead evaluation and prioritization time by ~50%, enabling faster identification of low-fit leads and improving overall pipeline throughput</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a>{' '}
              (Times Strategic Solutions Limited)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Nov 2023 – Aug 2024</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Project Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Closed 10+ sponsorship deals ranging from ₹3L to ₹30L with SMBs, GCCs, and media partners</li>
            <li>Generated pipeline through high-volume outbound prospecting with structured follow-up cycles</li>
            <li>Developed targeted outreach strategies aligned with industry themes such as digital transformation, AI adoption, and cloud innovation.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>nasscom</a>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Feb 2021 – Jul 2023</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Executive, Business Development</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Exceeded annual revenue target by 24% against a Rs. 1.5Cr quota in FY22-23 through consultative selling and strategic account expansion across SMBs and GCCs</li>
            <li>Led new member acquisition across Karnataka, achieving highest value contribution in the region across FY21-23</li>
            <li>Onboarded new member companies with ticket sizes ranging from Rs. 50K to Rs. 60L, managing 130-150 accounts and achieving 88% renewal rate through proactive engagement and value delivery</li>
            <li>Owned full sales cycle with SMB founders, enterprise leaders, and GCC heads — from discovery and stakeholder mapping through close</li>
            <li>Developed targeted outreach strategies for industry-themed events around digital transformation, AI adoption, and cloud innovation — driving sponsor and delegate acquisition</li>
          </ul>
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
