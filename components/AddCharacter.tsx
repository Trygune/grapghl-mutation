'use client'

import { useState } from 'react'
import AddCharacterModal from './AddCharacterModal'

const AddCharacter = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full flex items-center justify-center pb-12">
      <button
        onClick={() => setOpen(true)}
        className="text-center rounded-lg border border-green-600 bg-green-900/10 px-4 py-2.5 md:py-2 text-green-600 transition hover:bg-green-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        Add Character
      </button>
      <AddCharacterModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default AddCharacter
