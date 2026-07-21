import { ButtonProps } from '@/types/button'
import { cn } from '@/utils/cn'

const Button = ({
  disabled,
  icon,
  children,
  iconPosition = 'left',
  type = 'button',
  className,
  mode = 'outline',
  onClick,
}: ButtonProps) => {
  const Icon = icon
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        'flex items-center text-center gap-2 rounded-lg border border-blue-600 bg-blue-900/10 px-4 py-2.5 md:py-2 text-blue-600 transition hover:bg-blue-600/80 hover:text-white disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
        mode === 'contain' && 'bg-blue-500 text-white hover:bg-blue-600',
        mode === 'text' &&
          'border-zinc-700 text-blue-800 hover:border-blue-700 hover:text-blue-500 hover:bg-blue-900/10 font-medium',
        className
      )}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      <span className="hidden md:block">{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  )
}

export default Button
