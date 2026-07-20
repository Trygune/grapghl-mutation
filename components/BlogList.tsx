import { post } from '@/types/posts'
import BlogPost from './BlogPost'

interface blogListProps {
  posts: post[]
}

const BlogList = ({ posts }: blogListProps) => {
  return (
    <section className="felx-1 space-y-4">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  )
}

export default BlogList
