import { defineConfig, passthroughImageService } from 'astro/config'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  image: {
    service: passthroughImageService()
  }
})
