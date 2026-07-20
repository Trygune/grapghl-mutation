import { query } from '@/ApolloClient'
import AddCharacter from '@/components/AddCharacter'
import BlogHeader from '@/components/BlogHeader'
import BlogList from '@/components/BlogList'
import Pagination from '@/components/Pagination'
import { GET_POSTS } from '@/queries/posts'

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { page } = await searchParams

  const pageNumber = Number(page ?? 1)

  const { error, data } = await query({
    query: GET_POSTS,
    variables: { page: pageNumber },
  })
  console.log(data)

  if (error) return <p>Error : {error.message}</p>
  if (!data?.posts?.data?.length) {
    return <p>No characters found.</p>
  }

  return (
    <main className="max-w-6xl w-full mx-auto px-2 py-6 md:px-6 md:py-10">
      <BlogHeader />
      <AddCharacter />
      <BlogList posts={data.posts.data} />
      <Pagination info={data.posts.links} />
    </main>
  )
}

export default Home
