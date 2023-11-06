const colorMode = localStorage.getItem('colorMode')

const getSystemColorMode = () => {
  const systemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
  if (systemDarkTheme.matches) return 'dark'
  return 'light'
}

if (colorMode === 'dark' || colorMode === 'light') {
  document.body.setAttribute('data-colorMode', colorMode)
} else {
  const systemColorMode = getSystemColorMode()
  localStorage.setItem('colorMode', systemColorMode)
  document.body.setAttribute('data-colorMode', systemColorMode)
}
