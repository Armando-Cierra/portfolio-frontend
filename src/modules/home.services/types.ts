import type { Icons } from '@components.react/icon/types'

type Service = {
  id: string
  title: string
  description: string
  icon: Icons
  image: string
}

export interface Props {
  listOfServices: Service[]
}

export interface UseServicesSelectorProps {
  listOfServices: Service[]
}
