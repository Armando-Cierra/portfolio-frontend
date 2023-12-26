import type { ReactNode } from 'react'

export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customClass?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'subtle'
  iconOnly?: boolean
  children?: ReactNode
  isSelected?: boolean
}
