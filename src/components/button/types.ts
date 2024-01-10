export interface Props extends astroHTML.JSX.ButtonHTMLAttributes {
  customClass?: string
  variant?: 'solid' | 'outline' | 'ghost' | 'ghost2'
  iconOnly?: boolean
}
