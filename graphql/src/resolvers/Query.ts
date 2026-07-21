import { posts } from '../db'

const LIMIT = 10

export const Query = {
  posts: (
    _: unknown,
    {
      options,
    }: {
      options?: {
        paginate?: {
          page?: number
        }
        sort?: [
          {
            order?: 'ASC' | 'DESC'
          },
        ]
      }
    }
  ) => {
    const page = options?.paginate?.page ?? 1

    const start = (page - 1) * LIMIT
    const end = start + LIMIT

    const totalCount = posts.length
    const totalPages = Math.ceil(totalCount / LIMIT)
    return {
      data:
        options?.sort?.[0]?.order === 'DESC'
          ? [...posts].reverse().slice(start, end)
          : posts.slice(start, end),

      links: {
        first: {
          page: 1,
          limit: LIMIT,
        },

        prev:
          page > 1
            ? {
                page: page - 1,
                limit: LIMIT,
              }
            : null,

        next:
          page < totalPages
            ? {
                page: page + 1,
                limit: LIMIT,
              }
            : null,

        last: {
          page: totalPages,
          limit: LIMIT,
        },
      },

      meta: {
        totalCount,
      },
    }
  },

  post: (_: unknown, { id }: { id: string }) => {
    return posts.find((post) => post.id === id)
  },
}
