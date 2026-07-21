'use client'

import { useState } from 'react'
import AddPostModal from './AddPostModal'
import Button from './Button'

const AddPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full flex items-center justify-center pb-12">
      <Button onClick={() => setOpen(true)}>Add Character</Button>
      <AddPostModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default AddPost
