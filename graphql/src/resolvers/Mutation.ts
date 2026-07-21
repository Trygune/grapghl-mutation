import { user } from '../../types/posts'
import { posts } from '../db'

export const Mutation = {
  createPost: (
    _: unknown,
    { input }: { input: { title: string; body: string; user: user } }
  ) => {
    const newPost = {
      id: String(posts.length + 1),
      ...input,
    }

    posts.push(newPost)

    return newPost
  },

  updatePost: (
    _: unknown,
    {
      id,
      input,
    }: {
      id: string
      input: {
        title?: string
        body?: string
      }
    }
  ) => {
    const post = posts.find((p) => p.id === id)

    if (!post) throw new Error('Post not found')

    Object.assign(post, input)

    return post
  },

  deletePost: (_: unknown, { id }: { id: string }) => {
    const index = posts.findIndex((p) => p.id === id)

    if (index === -1) return false

    posts.splice(index, 1)

    return true
  },
}
