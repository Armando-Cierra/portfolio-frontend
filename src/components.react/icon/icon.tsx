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

  if (name === 'html')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
      </svg>
    )

  if (name === 'css')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
      </svg>
    )

  if (name === 'sass')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 10.523c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
      </svg>
    )

  if (name === 'js')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M7.5 8h3v8l-2 -1" />
        <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
      </svg>
    )

  if (name === 'typescript')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
        <path d="M9 12h4" />
        <path d="M11 12v6" />
        <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
      </svg>
    )

  if (name === 'react')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
      </svg>
    )

  if (name === 'svelte')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16" />
        <path d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16" />
      </svg>
    )

  if (name === 'astro')
    return (
      <svg
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="1280"
        height="1280"
        viewBox="0 0 1280 1280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.902C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
          fill="currentColor"
        />
      </svg>
    )

  if (name === 'node')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
        <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
      </svg>
    )

  if (name === 'strapi')
    return (
      <svg
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="800px"
        height="800px"
        viewBox="0 -2 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g fill="currentColor">
          <path d="M249.868148,1.42108547e-14 L81.6129672,1.42108547e-14 L81.6129672,84.3619834 L164.402564,84.3619834 C167.35201,84.3619834 169.744773,86.7547464 169.744773,89.7041929 L169.744773,171.351123 L255.210366,171.351123 L255.210366,5.3519758 C255.212951,3.93344238 254.651257,2.57212016 253.649118,1.56814827 C252.646978,0.56417638 251.286684,1.42108547e-14 249.868148,1.42108547e-14 Z"></path>
          <path
            d="M81.6032009,0 L81.6032009,84.3619834 L2.67132424,84.3619834 C1.58669272,84.3600599 0.610497706,83.7036101 0.199569944,82.6998335 C-0.211357818,81.6960568 0.0242672254,80.5435101 0.796179436,79.7815516 L81.6032009,0 L81.6032009,0 Z M174.295906,251.220572 C173.527464,251.975341 172.381399,252.195816 171.387771,251.780027 C170.394142,251.364238 169.746654,250.393242 169.744773,249.316128 L169.744773,171.351123 L255.210357,171.351123 L174.295906,251.210806 L174.295906,251.220572 L174.295906,251.220572 Z"
            opacity="0.405"
          ></path>
          <path
            d="M81.6032009,84.3619834 L167.078552,84.3619834 C168.543508,84.3619834 169.744773,85.5534817 169.744773,87.028205 L169.744773,171.351123 L86.9551767,171.351123 C84.0047559,171.351123 81.6129672,168.959334 81.6129672,166.008913 L81.6129672,84.3619834 L81.6032009,84.3619834 L81.6032009,84.3619834 Z"
            fillRule="nonzero"
            opacity="0.405"
          ></path>
        </g>
      </svg>
    )

  if (name === 'git')
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
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 15v-6" />
        <path d="M15 11l-2 -2" />
        <path d="M11 7l-1.9 -1.9" />
        <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
      </svg>
    )

  if (name === 'affinityPhoto')
    return (
      <svg
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        fill="currentColor"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Affinity Photo icon</title>
        <path d="M10.44 0l-.48.831 5.88 10.185L22.2 0zm12.84 0l-8.577 14.856H24V.711A.72.72 0 0023.28 0zM9.42 1.767L5.76 8.106h7.32zm1.563 7.257h-.018c-.36.005-.7.216-.879.523l-1.083 1.88-.008.014a1.052 1.052 0 000 1.02 16710.388 16710.388 0 001.093 1.894c.184.31.53.5.885.501.002 0 1.38.002 2.067-.001.36-.005.699-.205.878-.512.364-.631.731-1.261 1.093-1.894.176-.314.17-.703-.007-1.011l-.01-.015-1.078-1.87-.006-.009a1.053 1.053 0 00-.879-.52h-.012zM5.22 9.04L0 18.082v.39l.003 4.871a.72.72 0 00.662.655L9.3 9.04zm2.94 3.845L1.736 24h12.84zm2.757 2.906L15.657 24h7.623a.72.72 0 00.72-.72v-7.488Z" />
      </svg>
    )

  if (name === 'affinityDesigner')
    return (
      <svg
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        fill="currentColor"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Affinity Designer icon</title>
        <path d="M10.44 0L0 18.083v5.197a.72.72 0 00.713.72h10.023L5.7 15.277 14.52 0zm5.16 0l-4.86 8.418 3.718 6.439H24V.718A.72.72 0 0023.28 0zm-5.4 9.353l-2.064 3.575a1.289 1.289 0 000 1.288c.23.4.656.64 1.117.64h4.125zm-3.122 6.44L11.816 24h11.471a.72.72 0 00.713-.718v-7.49Z" />
      </svg>
    )

  if (name === 'sketch')
    return (
      <svg
        className={classNames('icon', {
          [customClass as string]: customClass
        })}
        width="800px"
        height="800px"
        viewBox="0 -1.5 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-420.000000, -7601.000000)"
            fill="currentColor"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M368.238325,7443.34969 L369.399325,7446.16397 L366.733325,7446.16397 L368.238325,7443.34969 Z M377.584325,7448.2242 L380.577325,7448.2242 L375.098325,7454.24832 L377.584325,7448.2242 Z M372.741325,7454.26274 L367.100325,7448.2242 L370.249325,7448.2242 L372.741325,7454.26274 Z M371.568325,7446.16397 L370.293325,7443.07362 L377.540325,7443.07362 L376.265325,7446.16397 L371.568325,7446.16397 Z M375.415325,7448.2242 L373.917325,7451.85536 L372.418325,7448.2242 L375.415325,7448.2242 Z M381.260325,7446.16397 L378.434325,7446.16397 L379.611325,7443.31055 L381.260325,7446.16397 Z M383.787325,7446.43592 L380.933325,7441.26783 C380.817325,7441.08653 380.661325,7441 380.482325,7441 C380.293325,7441 380.077325,7441.01339 379.853325,7441.01339 L368.188325,7441.01339 C367.967325,7441.01339 367.754325,7441.00515 367.567325,7441.00515 C367.377325,7441.00515 367.213325,7441.07314 367.094325,7441.26783 L364.198325,7446.75217 C363.892325,7447.25383 363.944325,7447.83379 364.327325,7448.27571 L373.021325,7457.55499 C373.277325,7457.85166 373.630325,7458 373.983325,7458 C374.342325,7458 374.701325,7457.84857 374.959325,7457.54366 L383.681325,7448.01509 C384.063325,7447.5639 384.106325,7446.9345 383.787325,7446.43592 L383.787325,7446.43592 Z"
                id="sketch-[#125]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    )

  return null
}
