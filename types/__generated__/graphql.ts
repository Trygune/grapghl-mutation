/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = { characters: { __typename: 'Characters', results: Array<{ __typename: 'Character', id: string | null, name: string | null, status: string | null, gender: string | null, created: string | null } | null> | null } | null };
