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
    <article className="relative group border-2 pb-12 border-green-900 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer hover:border-green-600">
      <div className="p-4 gap-y-4 bg-linear-to-b from-green-200 to-green-50 rounded-xl">
        <h2 className="text-2xl mb-4 font-semibold group-hover:text-green-600">
          {post.title}
        </h2>

        <p className="text-gray-700">
          {post.user.username} • {post.user.username}
        </p>

        <p className="text-gray-700">Email: {post.user.email}</p>

        <p className="text-black text-lg pt-2">{post.body}</p>
      </div>
      {post.id === '1' || post.id === '2' ? (
        <PreloadQuery query={GET_ONE_Post} variables={{ id: post.user.id }}>
          <Suspense
            fallback={
              <div className="flex justify-start items-center gap-x-2 text-green-600 text-sm text-gray-900 font-semibold absolute bottom-4 left-4">
                Loading <RotateCcwIcon className="animate-spin" size={15} />
              </div>
            }
          >
            <UserProfile userId={post.user.id} />
          </Suspense>
        </PreloadQuery>
      ) : (
        <p className="text-sm text-gray-900 font-semibold absolute bottom-4 left-4">
          {post.user.company.name}
        </p>
      )}
    </article>
  )
}

export default BlogPost
