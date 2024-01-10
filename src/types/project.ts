export type Tag = {
  attributes: {
    name: string
  }
}

export type Image = {
  attributes: {
    name: string
    url: string
    mime: string
  }
}

export type Button = {
  text: string
  icon: string
  url: string
  type: string
}

export type Paragraph = {
  children: { text: string }[]
}

export interface Project {
  attributes: {
    name: string
    longDescription: Paragraph[]
    cover: {
      data: {
        attributes: { url: string; name: string }
      }
    }
    tags: { data: Tag[] }
    gallery: { data: Image[] }
    buttons: Button[]
    slug: string
    localizations: {
      data: {
        attributes: {
          slug: string
        }
      }[]
    }
  }
}
