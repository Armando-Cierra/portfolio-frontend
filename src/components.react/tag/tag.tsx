import { Icon } from '@components.react'
import classNames from 'classnames'
import type { Props } from './types'
import './tag.scss'

export function Tag({
  children,
  className: customClassName,
  onClick,
  ...rest
}: Props) {
  return (
    <div
      className={classNames('tag', {
        [customClassName as string]: customClassName
      })}
      {...rest}
    >
      <span>{children}</span>
      <div className="tagExitButton" onClick={onClick}>
        <Icon name="x" />
      </div>
    </div>
  )
}
