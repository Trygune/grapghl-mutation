import { GetCharacterData, GetCharacterVariables } from '@/types/characters'
import { gql, TypedDocumentNode } from '@apollo/client'

export const GET_ONE_CHARACTER: TypedDocumentNode<
  GetCharacterData,
  GetCharacterVariables
> = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
    }
  }
`
