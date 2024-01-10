export type Tag = {
  attributes: {
    name: string
    category: string
    position: string
  }
}

export type Project = {
  attributes: {
    name: string
    slug: string
    shortDescription: string
    date: string
    category: string
    cover: {
      data: {
        attributes: {
          name: string
          url: string
        }
      }
    }
    tags: {
      data: Tag[]
    }
  }
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
    web: Tag[]
    design: Tag[]
  }
  projects: unknown
  currentURL: string
}

export interface UseContentProps {
  projects: unknown
}
