'use client'

import { pagesInfo } from '@/types/posts'
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({ info }: { info: pagesInfo }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') ?? 1)

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', String(newPage))

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <nav className="flex items-center justify-center gap-x-1 md:gap-x-3 py-8 md:py-10">
      <button
        onClick={() => handlePageChange(info.first.page)}
        disabled={page === 1}
        className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-900/10 px-4 py-2.5 md:py-2 text-green-600 transition hover:bg-green-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        <ChevronFirst size={18} />
        <span className="hidden md:block">First Page</span>
      </button>
      <button
        onClick={() => handlePageChange(info.prev.page)}
        disabled={page === 1}
        className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-900/10 px-4 py-2.5 md:py-2 text-green-600 transition hover:bg-green-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        <ChevronLeft size={18} />
        <span className="hidden md:block">Previous</span>
      </button>

      <div className="rounded-lg border border-green-600 bg-green-900/10 px-5 py-2 font-semibold text-green-600">
        {page} / {info.last.page}
      </div>

      <button
        onClick={() => handlePageChange(info.next.page)}
        disabled={page === info.last.page}
        className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-900/10 px-4 py-2.5 md:py-2 text-green-600 transition hover:bg-green-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        <span className="hidden md:block">Next</span>
        <ChevronRight size={18} />
      </button>
      <button
        onClick={() => handlePageChange(info.last.page)}
        disabled={page === info.last.page}
        className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-900/10 px-4 py-2.5 md:py-2 text-green-600 transition hover:bg-green-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
      >
        <span className="hidden md:block">Last Page</span>
        <ChevronLast size={18} />
      </button>
    </nav>
  )
}

export default Pagination
