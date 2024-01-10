export type Project = {
  attributes: {
    name: string
    slug: string
    shortDescription: string
    date: string
    cover: {
      data: {
        attributes: {
          name: string
          url: string
        }
      }
    }
  }
}

export interface Props {
  projects: unknown[]
  lang: string
}
