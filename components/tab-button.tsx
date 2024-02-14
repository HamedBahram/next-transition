import { cn } from '@/lib/utils'

export interface TabButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  activeTab: string
  isPending?: boolean
}

export default function TabButton({
  value,
  activeTab,
  isPending,
  children,
  ...props
}: TabButtonProps) {
  return (
    <button
      className={cn(
        activeTab === value ? 'bg-white text-gray-800' : 'bg-gray-100',
        isPending && 'opacity-50',
        'h-8 rounded-lg text-sm'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
