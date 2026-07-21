import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const usePageChange = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (newPage: number) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', String(newPage))

    router.push(`${pathname}?${params.toString()}`)
  }
}
