'use client'

import { GET_ONE_CHARACTER } from '@/queries/oneCharacter'
import { useSuspenseQuery } from '@apollo/client/react'
import { RotateCcwIcon } from 'lucide-react'

export const UserProfile = ({ userId }: { userId: string }) => {
  const { error, data, refetch } = useSuspenseQuery(GET_ONE_CHARACTER, {
    variables: { id: userId },
  })

  if (error) return `Error! ${error}`

  return (
    <div className="flex justify-start items-center gap-x-2">
      <p className="text-gray-700">{data.character.status}</p>
      <button
        className="text-blue-600 hover:underline cursor-pointer text-sm"
        onClick={() =>
          refetch(
            //   {
            //   id: '1',
            // }
          )
        }
      >
        <RotateCcwIcon size={15} />
      </button>
    </div>
  )
}
