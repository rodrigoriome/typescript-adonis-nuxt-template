export default {
  /**
   * @see https://go.nuxtjs.dev/config-target
   */
  target: 'static' as const,

  /**
   * @see https://go.nuxtjs.dev/config-build
   */
  build: {},

  /**
   * @see https://go.nuxtjs.dev/config-components
   */
  components: false,

  srcDir: 'resources/web',

  generate: {
    dir: 'public',
  },

  telemetry: false,
}
