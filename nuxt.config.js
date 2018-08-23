module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'thmart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_771689_6eh6dkzzohf.css' }
    ]
  },
  // css重置
  css: ['~assets/css/style.css',
        { src: '~assets/sass/common.sass', lang: 'sass' },
        {src:'element-ui/lib/theme-chalk/index.css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * [plugins description]
   * @type {Array}
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    prefix: '',
    proxy: true
  },
  plugins: [
    {src:'~plugins/element-ui', ssr: true},
    '~/plugins/axios',
    // {src:'~plugins/axios', ssr: false},
    {src:'~plugins/vue-awesome-swiper', ssr: false}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // loaders配置
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)/,
       loader: "url-loader",
       query: {
          limit:  10000,
          name: 'img/[name].[hash].[text]'
       } 
      }
    ],
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

