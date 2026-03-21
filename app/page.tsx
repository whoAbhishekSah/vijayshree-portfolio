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
        where I qualify inbound leads, run discovery calls, and help move deals forward for SaaS and fintech companies.
      </p>
      <p className="mb-4">
        Before Stripe, I worked at{' '}
        <a href="https://Nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a> and{' '}
        <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a>.
        Over five years, I have done outbound prospecting, managed accounts, and run full sales cycles.
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">Impact</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">$7M+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">in projected payment volume at Stripe</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">24%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">above revenue target at Nasscom in FY22–23</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">94%+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">quality score on discovery calls</p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-2xl font-semibold tracking-tight">88%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">renewal rate across 130–150 accounts</p>
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
            <h3 className="font-medium"><a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a></h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Sep 2024 – Present</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Sales Development Operations Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Qualified 170+ inbound leads using MEDDIC for SaaS and digital-native businesses</li>
            <li>Enrolled 250+ prospects per week into inbound sequences with a 40% engagement rate</li>
            <li>Found an account that moved to opportunity stage with $75K in expected revenue</li>
            <li>Ran 15–20 discovery calls per week and consistently met SLAs</li>
            <li>Helped with co-sell motions, including conflict checks, opportunity creation, and AE handoffs</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium"><a href="https://Nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a></h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Feb 2021 – Jul 2023</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Executive, Business Development</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Beat my annual target of ₹1.5 Cr by 24% in FY22–23</li>
            <li>Managed 130–150 SME accounts with contract values from ₹50K to ₹60L and kept an 88% renewal rate</li>
            <li>Ran the full sales cycle with SMB founders, enterprise leaders, and GCC heads</li>
            <li>Created market access programs, sponsorship models, and brand initiatives for members</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium"><a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a> (Times Strategic Solutions)</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Nov 2023 – Aug 2024</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Senior Project Associate</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
            <li>Closed 10+ sponsorship deals worth ₹3L to ₹30L with SMBs, GCCs, and media partners</li>
            <li>Made 80+ outbound calls and booked 10–15 meetings per deal</li>
            <li>Worked with the marketing team on email and nurture campaigns for conference events</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      <p className="text-neutral-600 dark:text-neutral-400">
        If you would like to get in touch, you can email me at{' '}
        <a href="mailto:vijayshree.pukale@gmail.com" className={linkClass}>
          vijayshree.pukale@gmail.com
        </a>
      </p>
    </section>
  )
}
