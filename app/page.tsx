const linkClass = "underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Vijayshree Pukale
      </h1>
      <p className="mb-4">
        Hi, I am Vijayshree. I work in sales development at{' '}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Stripe</a>,
        where I qualify inbound leads, run discovery calls, and help move deals forward for SaaS and fintech companies. I also build the operational layer behind qualification — including an LLM-assisted triage workflow that improved lead prioritization at scale.
      </p>
      <p className="mb-4">
        Before Stripe, I spent five years at{' '}
        <a href="https://nasscom.in" target="_blank" rel="noopener noreferrer" className={linkClass}>Nasscom</a> and{' '}
        <a href="https://et-edge.com" target="_blank" rel="noopener noreferrer" className={linkClass}>ET Edge</a> — doing outbound prospecting, managing SME and enterprise accounts, and running full sales cycles. I am now looking to move into a BDR or AE role at an AI/tech company.
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
