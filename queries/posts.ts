import { postsProps } from '@/types/posts'
import { gql, TypedDocumentNode } from '@apollo/client'

export const GET_POSTS: TypedDocumentNode<postsProps> =
  // : TypedDocumentNode<
  //   GetCharactersQuery,
  //   GetCharactersQueryVariables
  // >
  gql`
    query GetPosts($page: Int!) {
      posts(options: { paginate: { page: $page } }) {
        data {
          id
          title
          body
          user {
            id
            name
            username
            email
            company {
              name
            }
          }
        }
        links {
          first {
            page
            limit
          }
          prev {
            page
            limit
          }
          next {
            page
            limit
          }
          last {
            page
            limit
          }
        }
      }
    }
  `
