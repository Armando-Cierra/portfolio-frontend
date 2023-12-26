export type Project = {
  name: string
  cover: string
  shortDescription: string
  description: string
  category: string[]
  tags: string[]
}

export interface Props {
  translations: {
    search: string
    placeholder: string
    categories: string
    web: string
    design: string
    more: string
  }
  categories: {
    web: string[]
    design: string[]
  }
  projects: Project[]
}

export interface UseContentProps {
  projects: Project[]
}
