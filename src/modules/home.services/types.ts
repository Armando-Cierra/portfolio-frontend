import type { Icons } from '@components.react/icon/types'

export type Service = {
  attributes: {
    slug: string
    name: string
    description: string
    icon: Icons
    cover: {
      data: {
        attributes: {
          url: string
          name: string
        }
      }
    }
  }
}

export interface Props {
  listOfServices: unknown[]
}

export interface UseServicesSelectorProps {
  listOfServices: unknown[]
}
