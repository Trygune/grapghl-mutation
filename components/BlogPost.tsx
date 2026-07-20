import { character } from '@/types/characters'
import { UserProfile } from './UserProfile'
import { PreloadQuery } from '@/ApolloClient'
import { Suspense } from 'react'
import { GET_ONE_CHARACTER } from '@/queries/oneCharacter'
import Image from 'next/image'
import { RotateCcwIcon } from 'lucide-react'

interface Props {
  character: character
}

const BlogPost = ({ character }: Props) => {
  return (
    <article className="relative group border-2 pb-12 border-green-900 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer hover:border-green-600">
      <div className="relative w-full h-56 bg-green-200 rounded-t-xl">
        <Image
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="p-4 space-y-1 bg-linear-to-b from-green-200 to-green-50">
        <h2 className="text-2xl mb-6 font-semibold group-hover:text-green-600">
          {character.name}
        </h2>

        <p className="text-gray-700">
          {character.species} • {character.gender}
        </p>

        <p className="text-gray-700">Origin: {character.origin.name}</p>

        <p className="text-gray-700">Dimension: {character.origin.dimension}</p>

        {character.id === '1' || character.id === '2' ? (
          <PreloadQuery
            query={GET_ONE_CHARACTER}
            variables={{ id: character.id }}
          >
            <Suspense
              fallback={
                <div className="flex justify-start items-center gap-x-2 text-green-600">
                  Loading <RotateCcwIcon className="animate-spin" size={15} />
                </div>
              }
            >
              <UserProfile userId={character.id} />
            </Suspense>
          </PreloadQuery>
        ) : (
          <p className="text-gray-700">{character.status}</p>
        )}
      </div>
      <p className="text-sm text-gray-500 absolute bottom-4 left-4">
        {new Intl.DateTimeFormat('en-US', {
          dateStyle: 'medium',
        }).format(new Date(character.created))}
      </p>
    </article>
  )
}

export default BlogPost
