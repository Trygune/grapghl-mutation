import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation CREATE_POST($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`
