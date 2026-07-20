'use client'

import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

const AddCharacterModal = ({ open, onClose }: Props) => {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-green-700 bg-zinc-900 p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-500">Add Character</h2>

          <button
            onClick={onClose}
            className="rounded-md p-2 transition text-green-500 hover:bg-zinc-800 cursor-pointer"
          >
            <X />
          </button>
        </div>

        <form className="space-y-4">
          <input
            placeholder="Character name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-green-400 focus:border-green-500"
          />

          <input
            placeholder="Origin"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-green-400 focus:border-green-500"
          />

          <input
            placeholder="Image URL"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-green-400 focus:border-green-500"
          />

          <div className="grid grid-cols-3 gap-4">
            <select className="rounded-lg border text-green-400 border-zinc-700 bg-zinc-800 p-3 cursor-pointer">
              <option>Human</option>
              <option>Alien</option>
              <option>Robot</option>
              <option>Unknown</option>
            </select>

            <select className="rounded-lg border text-green-400 border-zinc-700 bg-zinc-800 p-3 cursor-pointer">
              <option>Male</option>
              <option>Female</option>
              <option>Genderless</option>
              <option>Unknown</option>
            </select>

            <select className="rounded-lg border text-green-400 border-zinc-700 bg-zinc-800 p-3 cursor-pointer">
              <option>Alive</option>
              <option>Dead</option>
              <option>Unknown</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-center rounded-lg border border-zinc-700 bg-green-900/10 px-5 py-2 text-green-700 transition hover:border-green-900 disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="text-center rounded-lg border border-green-600 bg-green-500 px-5 py-2 text-white transition hover:bg-green-600 disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
            >
              Create Character
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCharacterModal
