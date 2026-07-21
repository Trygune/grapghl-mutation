import { GetPostData, GetPostVariables } from '@/types/posts'
import { gql, TypedDocumentNode } from '@apollo/client'

export const GET_ONE_Post: TypedDocumentNode<GetPostData, GetPostVariables> =
  gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        user {
          company {
            name
          }
        }
      }
    }
  `
