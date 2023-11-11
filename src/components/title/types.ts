export interface Props extends astroHTML.JSX.HTMLAttributes {
  customClass?: string
  size?: 'large' | 'default'
  align?: 'left' | 'center' | 'right'
  top: string
  bottom: string
}
