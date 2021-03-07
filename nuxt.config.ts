import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  ...require('./config/nuxt/alias').default,
  ...require('./config/nuxt/build').default,
  ...require('./config/nuxt/css').default,
  ...require('./config/nuxt/env').default,
  ...require('./config/nuxt/head').default,
  ...require('./config/nuxt/hooks').default,
  ...require('./config/nuxt/modules').default,
  ...require('./config/nuxt/plugins').default,
  ...require('./config/nuxt/server').default,
}

export default nuxtConfig
