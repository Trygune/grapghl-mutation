'use client'

import { X } from 'lucide-react'
import Button from './Button'
import { ChangeEvent, SubmitEvent, useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { CREATE_POST } from '@/mutations/createPost'
import { useRouter } from 'next/navigation'

interface Props {
  open: boolean
  onClose: () => void
}

const AddPostModal = ({ open, onClose }: Props) => {
  const [formData, setFormData] = useState<{ title?: string; body?: string }>(
    {}
  )
  const router = useRouter()
  const [addPost, { data, loading, error }] = useMutation(CREATE_POST)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    })
  }

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    if (e) e.preventDefault()
    console.log('formData', formData)
    if (!formData || !formData.title || !formData.body) {
      alert('Form is Empty!')
    }
    await addPost({
      variables: {
        title: formData.title,
        body: formData.body,
      },
    })
    console.log(data)

    setFormData({})
    onClose()
    router.refresh()
  }

  if (!open) return null
  if (error) return alert(`Submission error! ${error.message}`)
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-blue-700 bg-zinc-900 p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-500">CREATE POST</h2>

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-md p-2 transition text-blue-500 hover:bg-zinc-800 cursor-pointer"
          >
            <X />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            onChange={(e) => handleChange(e, 'title')}
            placeholder="Title"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 focus:border-blue-500"
          />

          <div className="flex justify-between items-center gap-x-4">
            <input
              onChange={(e) => handleChange(e, 'name')}
              placeholder="Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 focus:border-blue-500"
            />
            <input
              onChange={(e) => handleChange(e, 'username')}
              placeholder="Username"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 focus:border-blue-500"
            />
          </div>

          {/* <div className=" group flex justify-center items-center"> */}
          <input
            onChange={(e) => handleChange(e, 'email')}
            placeholder="youremail@example.com"
            className="w-full h-12 rounded-lg rounded-r-none border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 group-focus-within:border-blue-500"
          />
          {/* <select onChange={(e)=>handleChange(e,'email')} className="rounded-lg h-12 border rounded-l-none border-l-0 text-blue-400 border-zinc-700 bg-zinc-800 group-focus-within:border-blue-500 p-3 cursor-pointer">
              <option>@gmail.com</option>
              <option>@yahoo.com</option>
              <option>@hotmail.com</option>
              <option>@outlook.com</option>
            </select>
          </div> */}
          <input
            onChange={(e) => handleChange(e, 'company')}
            placeholder="Company Name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 focus:border-blue-500"
          />

          <textarea
            onChange={(e) => handleChange(e, 'body')}
            placeholder="What I'm writing about today..."
            rows={8}
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none text-blue-400 focus:border-blue-500"
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button onClick={onClose} mode="text" disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" mode="contain" disabled={loading}>
              Submit Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPostModal
