export const metadata = {
  title: 'Now',
  description: 'What Vijayshree is focused on right now.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Now</h1>

      <p className="mb-6 text-neutral-800 dark:text-neutral-200">
        This page is about what I am spending my time on right now. Last updated March 2026.
      </p>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-3 tracking-tighter">Learning the Technical Side</h2>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
          I have been at Stripe for over a year now. Working here has shown me how much better sales conversations go when you actually understand the product. So I am teaching myself the technical basics.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-800 dark:text-neutral-200">
          <li>
            <span className="font-medium">JSON and HTTP</span> — I am learning how data is structured and how it moves between systems. Things like request and response formats, status codes, and headers.
          </li>
          <li>
            <span className="font-medium">API documentation</span> — I read API docs from companies like Stripe to understand how endpoints, parameters, and authentication work.
          </li>
          <li>
            <span className="font-medium">Developer experience</span> — I want to understand what makes a developer product good, so I can talk to technical buyers in a way that makes sense to them.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-3 tracking-tighter">Why I Am Doing This</h2>
        <p className="text-neutral-800 dark:text-neutral-200">
          When I can read Stripe's API docs and understand what a prospect's integration might look like, I ask better questions during discovery. I write sharper outreach. I can tell the difference between a quick integration and a complex one. That helps me qualify leads on technical fit, not just budget and timeline.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-3 tracking-tighter">At Work</h2>
        <p className="text-neutral-800 dark:text-neutral-200">
          I am still running inbound qualification at Stripe's delivery center in Bangalore. My day-to-day involves managing leads, running discovery calls, and working with SDRs and AEs across APAC and EMEA.
        </p>
      </div>
    </section>
  )
}
