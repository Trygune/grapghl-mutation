import { type LucideIcon } from 'lucide-react'
import { type ReactNode } from 'react'

export interface ButtonProps {
  disabled?: boolean
  className?: string
  type?: 'button' | 'reset' | 'submit'
  mode?: 'outline' | 'contain' | 'text'
  icon?: LucideIcon
  children: ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
}
