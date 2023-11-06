import En from './en.json'
import Es from './es.json'

export const languages = {
  en: 'English',
  es: 'Español'
}

export const defaultLang = 'en'

export const ui = {
  en: En,
  es: Es
} as const
