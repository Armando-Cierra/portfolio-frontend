export type Work = {
  attributes: {
    name: string
    jobType: string
    startDate: string
    endDate: string
    cover: {
      data: {
        attributes: {
          url: string
          name: string
        }
      }
    }
    roles: { name: string }[]
  }
}

export interface Props {
  workExperiences: unknown
}
