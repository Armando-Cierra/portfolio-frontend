import classNames from 'classnames'
import type { Props } from './types'

export const Button = ({
  customClass,
  variant = 'solid',
  iconOnly = false,
  children,
  ...rest
}: Props) => {
  return (
    <button
      className={classNames('button', {
        [`button--${variant}`]: variant,
        'button--iconOnly': iconOnly,
        [customClass as string]: customClass
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
