import { post } from '@/types/posts'
import { UserProfile } from './UserProfile'
import { PreloadQuery } from '@/ApolloClient'
import { Suspense } from 'react'
import { GET_ONE_Post } from '@/queries/onePost'
import { RotateCcwIcon } from 'lucide-react'

interface Props {
  post: post
}

const BlogPost = ({ post }: Props) => {
  return (
    <article className="relative group border-2 pb-10 border-blue-900 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer hover:border-blue-600">
      <div className="p-4 gap-y-4 bg-linear-to-b from-blue-200 to-blue-50 rounded-xl">
        <h2 className="text-2xl mb-4 font-semibold group-hover:text-blue-600">
          {post.title}
        </h2>

        <p className="text-gray-700">
          {post.user && post.user.name ? post.user.name : 'unknown'} •{' '}
          {post.user && post.user.username ? post.user.username : 'unknown'}
        </p>

        <p className="text-gray-700">
          Email: {post.user && post.user.email ? post.user.email : 'unknown'}
        </p>

        <p className="text-black text-lg pt-2 italic">{post.body}</p>
      </div>
      {post.user && (post.id === '1' || post.id === '2') ? (
        <PreloadQuery query={GET_ONE_Post} variables={{ id: post.user.id }}>
          <Suspense
            fallback={
              <div className="flex justify-start items-center gap-x-2 text-blue-600 text-sm font-semibold absolute bottom-4 left-4">
                Loading <RotateCcwIcon className="animate-spin" size={15} />
              </div>
            }
          >
            <UserProfile userId={post.user.id} />
          </Suspense>
        </PreloadQuery>
      ) : (
        <p className="text-sm text-gray-900 font-semibold absolute bottom-4 left-4">
          {post.user && post.user.company.name
            ? post.user.company.name
            : 'unknown'}
        </p>
      )}
    </article>
  )
}

export default BlogPost
