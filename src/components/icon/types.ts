export type Icon =
  | 'moon'
  | 'sun'
  | 'facebook'
  | 'linkedIn'
  | 'github'
  | 'user'
  | 'x'
  | 'case'
  | 'doubleChevronDown'
  | 'cv'
  | 'web'
  | 'leftArrow'

export interface Props extends astroHTML.JSX.SVGAttributes {
  customClass?: string
  name: Icon
}
