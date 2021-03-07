import { resolve } from 'path'

export default {
  alias: {
    App: resolve(__dirname, '../../app'),
    Config: resolve(__dirname, '../../config'),
    Contracts: resolve(__dirname, '../../contracts'),
    Database: resolve(__dirname, '../../database'),
    Nuxt: resolve(__dirname, '../../web'),
  },
}
