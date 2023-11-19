export type Icons =
  | 'chevronDown'
  | 'code'
  | 'figma'
  | 'switch'
  | 'brush'
  | 'coffee'
  | 'trash'
  | 'email'
  | 'x'
  | 'search'

export interface Props extends React.SVGProps<SVGSVGElement> {
  customClass?: string
  name: Icons
}
