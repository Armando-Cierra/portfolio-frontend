import { forwardRef } from 'react'
import classNames from 'classnames'
import type { Props } from './types'

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      customClass,
      variant = 'solid',
      iconOnly = false,
      children,
      isSelected = false,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={classNames('button', {
          [`button--${variant}`]: variant,
          'button--iconOnly': iconOnly,
          'button-isSelected': isSelected,
          [customClass as string]: customClass
        })}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)
