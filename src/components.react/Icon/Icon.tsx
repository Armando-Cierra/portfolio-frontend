import classNames from 'classnames'
import type { Props } from './types'

export const Icon = ({ customClass, name, ...rest }: Props) => {
  if (name === 'brush')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path>
        <path d="M21 3a16 16 0 0 0 -12.8 10.2"></path>
        <path d="M21 3a16 16 0 0 1 -10.2 12.8"></path>
        <path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path>
      </svg>
    )

  if (name === 'chevronDown')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 9l6 6l6 -6"></path>
      </svg>
    )

  if (name === 'code')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 8l-4 4l4 4"></path>
        <path d="M17 8l4 4l-4 4"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
    )

  if (name === 'coffee')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"></path>
        <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
        <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
        <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"></path>
        <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"></path>
      </svg>
    )

  if (name === 'email')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
        <path d="M3 7l9 6l9 -6"></path>
      </svg>
    )

  if (name === 'figma')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
        <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"></path>
      </svg>
    )

  if (name === 'search')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    )

  if (name === 'switch')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"></path>
      </svg>
    )

  if (name === 'trash')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
      </svg>
    )

  if (name === 'x')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    )

  return null
}
