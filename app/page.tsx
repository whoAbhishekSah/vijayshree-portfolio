const linkClass = "underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vijayshree Pukale
      </h1>
      <p className="mb-4">
        Hi, I am Vijayshree, I work in sales development at{' '}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a>,
        where I qualify inbound leads, run discovery calls, and help move deals forward for companies across segments. I also build the operational layer behind qualification — including an LLM-assisted triage workflow that improved lead prioritization at scale.
      </p>
      <p className="mb-4">
        Before Stripe, I spent five years at{' '}
        <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a> and{' '}
        <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a> — doing outbound prospecting, managing SME and enterprise accounts, and running full sales cycles. I am now looking to move into a SDR or AE role at an AI/tech company.
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Impact</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">$70M+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">in projected payment processing volume at Stripe</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">24%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">above revenue target at Nasscom in FY22-23</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">94%+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">quality score on discovery calls</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">88%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">renewal rate across 130-150 accounts</p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">What I Work With</h2>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium">Sales:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> MEDDIC, lead qualification, outbound prospecting, pipeline generation, discovery calls, AE handoffs</span>
          </div>
          <div>
            <span className="font-medium">Tools:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> Salesforce, Salesloft, LinkedIn Sales Navigator, ZoomInfo, HubSpot, Gong, Apollo, Outreach</span>
          </div>
          <div>
            <span className="font-medium">Industries:</span>
            <span className="text-neutral-600 dark:text-neutral-400"> SaaS, fintech, payments, API platforms</span>
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
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Sales Development Operations Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Managed and qualified 170+ inbound leads contributing to $70M+ in projected payment processing volume across SaaS and digital-native businesses</li>
            <li>Prioritized 250+ weekly prospects into structured qualification workflows, improving SDR discovery call conversion</li>
            <li>Maintained 94%+ quality audit score while operating within strict SLAs in a high-volume pilot environment</li>
            <li>Applied MEDDIC to assess technical fit, buying intent, and commercial readiness — improving downstream opportunity quality for AEs</li>
            <li>Built an LLM-assisted triage workflow to automate initial screening and improve lead prioritization accuracy</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Feb 2021 - Jul 2023</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Executive, Business Development</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Exceeded annual revenue targets by 24% (FY22-23) against a Rs. 1.5Cr quota through consultative engagement with SMBs and GCCs</li>
            <li>Managed 130-150 SME accounts (ACV Rs. 50K-60L), achieving an 88% renewal rate through proactive account management and expansion</li>
            <li>Owned full sales cycle including discovery, stakeholder mapping, negotiation, and closure with founders, enterprise leaders, and GCC heads</li>
            <li>Closed new member acquisition across Karnataka, achieving highest value contribution across FY21-23</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">
              <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a>{' '}
              (Times Strategic Solutions)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Nov 2023 - Aug 2024</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Project Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Closed 10+ sponsorship deals ranging Rs. 3L-30L, partnering with SMBs, GCCs, industry associations, and media partners</li>
            <li>Drove outbound pipeline through high-volume prospecting across corporate and media sectors with structured follow-up cycles</li>
            <li>Developed outreach strategies aligned with AI adoption, digital transformation, and cloud innovation themes</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium text-neutral-900 dark:text-neutral-100">Open to opportunities</span> — BDR and AE roles at AI/tech companies.
        </p>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">
        Get in touch at{' '}
        <a href="mailto:vijayshree.pukale@gmail.com" className={linkClass}>
          vijayshree.pukale@gmail.com
        </a>
      </p>
    </section>
  )
}
