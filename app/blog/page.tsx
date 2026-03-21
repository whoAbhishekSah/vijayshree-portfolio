import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Notes on learning APIs, JSON, HTTP, and building technical depth in sales.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Learning Journal</h1>
      <BlogPosts />
    </section>
  )
}
