'use client'

import { pagesInfo } from '@/types/posts'
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Button from '../Button'
import { usePageChange } from '@/hooks/usePageChange'

const Pagination = ({ info }: { info: pagesInfo }) => {
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') ?? 1)

  const handlePageChange = usePageChange()

  return (
    <nav className="flex items-center justify-center gap-x-1 md:gap-x-3 py-8 md:py-10">
      <Button
        onClick={() => handlePageChange(info.first.page)}
        disabled={page === 1}
        icon={ChevronFirst}
      >
        First Page
      </Button>
      <Button
        onClick={() => handlePageChange(info.prev.page)}
        disabled={page === 1}
        icon={ChevronLeft}
      >
        Previous
      </Button>

      <div className="rounded-lg border border-blue-600 bg-blue-900/10 px-5 py-2 font-semibold text-blue-600">
        {page} / {info.last.page}
      </div>

      <Button
        onClick={() => handlePageChange(info.next.page)}
        disabled={page === info.last.page}
        icon={ChevronRight}
        iconPosition="right"
      >
        Next
      </Button>
      <Button
        onClick={() => handlePageChange(info.last.page)}
        disabled={page === info.last.page}
        icon={ChevronLast}
        iconPosition="right"
      >
        Last Page
      </Button>
    </nav>
  )
}

export default Pagination
