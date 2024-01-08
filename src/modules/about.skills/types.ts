export type Skill = {
  attributes: {
    name: string
    percentage: number
    icon: string
    category: string
    color: string
  }
}

export interface Props {
  skills: unknown
}

export interface SkillsListProps {
  list: Skill[]
}
