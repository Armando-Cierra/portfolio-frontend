import { Icon, type Icons } from '@components.react'
import { Wave } from './wave'
import type { SkillsListProps } from './types'

export function SkillsList({ list }: SkillsListProps) {
  const handleHover =
    (percentage: number) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const waves = e.currentTarget.children[1].children[1] as HTMLElement
      waves.style.bottom = `-${100 - percentage}%`
    }

  const handleMouseOut =
    () => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const waves = e.currentTarget.children[1].children[1] as HTMLElement
      waves.style.bottom = `-100%`
    }

  return (
    <div className="list">
      {list.map((item) => {
        const {
          attributes: { name, icon, percentage, color }
        } = item

        return (
          <div
            key={icon}
            className="item"
            onMouseEnter={handleHover(percentage)}
            onMouseLeave={handleMouseOut()}
          >
            <div className="tooltip">
              <span>{percentage}%</span>
            </div>
            <div className="box">
              <Icon name={icon as Icons} />
              <div className="waves">
                <Wave style={{ color: color }} />
                <div className="filler" style={{ background: color }} />
              </div>
            </div>
            <span className="skillName">{name}</span>
          </div>
        )
      })}
    </div>
  )
}
