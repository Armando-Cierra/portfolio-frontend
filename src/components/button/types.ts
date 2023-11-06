export interface Props extends astroHTML.JSX.ButtonHTMLAttributes {
  customClass?: string
  variant?: 'solid' | 'outline' | 'ghost'
  iconOnly?: boolean
}
