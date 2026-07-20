import { query } from '@/ApolloClient'
import BlogHeader from '@/components/BlogHeader'
import BlogList from '@/components/BlogList'
import Pagination from '@/components/Pagination'
import { GET_CHARACTERS } from '@/queries/characters'

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { page } = await searchParams

  const pageNumber = Number(page ?? 1)

  const { error, data } = await query({
    query: GET_CHARACTERS,
    variables: { page: pageNumber },
  })

  if (error) return <p>Error : {error.message}</p>
  if (!data?.characters?.results?.length) {
    return <p>No characters found.</p>
  }

  return (
    <main className="max-w-6xl w-full mx-auto px-2 py-6 md:px-6 md:py-10">
      <BlogHeader />
      <BlogList characters={data.characters.results} />
      <Pagination info={data.characters.info} />
    </main>
  )
}

export default Home
