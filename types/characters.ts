export interface characterOrigin {
  id: string
  name: string
  type: string
  dimension: string
  created: string
}
export interface character {
  id: string
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  species: string
  origin: characterOrigin
  image: string
  created: string
}

export interface GetCharacterData {
  character: character
}

export interface GetCharacterVariables {
  id: string
}

export interface pagesInfo {
  count: number
  pages: number
  next: number
  prev: number
}
export interface charactersProps {
  characters: {
    info: pagesInfo
    results: character[]
  }
}
