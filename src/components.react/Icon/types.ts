export type Icons =
  | 'chevronDown'
  | 'code'
  | 'figma'
  | 'switch'
  | 'brush'
  | 'coffee'
  | 'trash'
  | 'email'
  | 'x'
  | 'search'
  | 'html'
  | 'css'
  | 'sass'
  | 'js'
  | 'typescript'
  | 'react'
  | 'svelte'
  | 'jest'
  | 'astro'
  | 'node'
  | 'strapi'
  | 'git'
  | 'affinityPhoto'
  | 'affinityDesigner'
  | 'sketch'

export interface Props extends React.SVGProps<SVGSVGElement> {
  customClass?: string
  name: Icons
}
