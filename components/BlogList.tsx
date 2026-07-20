import { character } from '@/types/characters'
import BlogPost from './BlogPost'

interface blogListProps {
  characters: character[]
}

const BlogList = ({ characters }: blogListProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {characters.map((character) => (
        <BlogPost key={character.id} character={character} />
      ))}
    </section>
  )
}

export default BlogList
