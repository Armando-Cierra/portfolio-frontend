import type { Icons } from '@components.react/icon/types'

export type Skill = {
  name: string
  percentage: string
  color: string
  icon: Icons
}

export interface Props {
  list: Skill[]
}
