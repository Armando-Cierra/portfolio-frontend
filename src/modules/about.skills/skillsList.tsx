import { Icon } from '@components.react'
import { Wave } from './wave'
import type { Props } from './types'

export function SkillsList({ list }: Props) {
  const handleHover =
    (percentage: string) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const waves = e.currentTarget.children[1].children[1] as HTMLElement
      waves.style.bottom = `-${100 - Number(percentage)}%`
    }

  const handleMouseOut =
    (percentage: string) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const waves = e.currentTarget.children[1].children[1] as HTMLElement
      waves.style.bottom = `-100%`
    }

  return (
    <div className="list">
      {list.map((item) => (
        <div
          key={item.icon}
          className="item"
          onMouseEnter={handleHover(item.percentage)}
          onMouseLeave={handleMouseOut(item.percentage)}
        >
          <div className="tooltip">
            <span>{item.percentage}%</span>
          </div>
          <div className="box">
            <Icon name={item.icon} />
            <div className="waves">
              <Wave style={{ color: item.color }} />
              <div className="filler" style={{ background: item.color }} />
            </div>
          </div>
          <span className="skillName">{item.name}</span>
        </div>
      ))}
    </div>
  )
}
