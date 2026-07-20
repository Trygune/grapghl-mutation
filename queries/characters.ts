import { charactersProps } from '@/types/characters'
import { gql, TypedDocumentNode } from '@apollo/client'

export const GET_CHARACTERS: TypedDocumentNode<charactersProps> =
  // : TypedDocumentNode<
  //   GetCharactersQuery,
  //   GetCharactersQueryVariables
  // >
  gql`
    query GetCharacters($page: Int!) {
      characters(page: $page) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          origin {
            id
            name
            dimension
            type
            created
          }
          gender
          species
          image
          created
        }
      }
    }
  `
