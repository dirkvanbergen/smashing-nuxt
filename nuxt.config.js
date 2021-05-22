require('dotenv').config()
const contentful = require('contentful')

module.exports = {
  plugins: ['~/plugins/fontawesome'],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '~modules/blacklist-routes.js',

    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bootstrap-vue',],
  buildModules: [,
    '@nuxtjs/moment',
  ],

  moment: {
    defaultLocale: 'nl',
    locales: ['nl']
  },
  /*
  ** Headers of the page
  */
  markdownit: { injected: true },
  head: {
    title: 'Smashing \'72 - De leukste volleybalvereniging van Diemen!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    //'bulma',
    // SCSS file in the project
    //'@/assets/css/main.scss',
    // CSS file in the project
    '@/assets/css/smashing.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Extend router to support dynamic page structure
  */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/:item/:page?',
        component: resolve(__dirname, 'pages/content.vue')
      })
    }
  },
  loaders: [
    {
      test: /\.(pdf|doc|docx)$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1kB
        name: 'doc/[name].[hash:7].[ext]'
      }
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: "crmkzp2rr7hq",
        accessToken: "6N9kZ1ncGM6uS9otrP0Hy6n5NXA8BmW5nFJCkzTmgWE"
      });

      const teamRoutes = client.getEntries({
        content_type: 'team'
      }).then((response) => {
        return response.items.map(entry => {
          let route = `/${entry.fields.parent.fields.slug}/${entry.fields.slug}`
          return {
            route: route,
            payload: entry
          };
        });
      });

      const pageRoutes = client.getEntries({
        content_type: 'page',
      }).then((response) => {
        return response.items.map(entry => {
          return {
            route: `/${entry.fields.parent.fields.slug}/${entry.fields.slug}`,
            payload: entry
          };
        });
      });

      return Promise.all([teamRoutes, pageRoutes]).then((routes) => {
        return routes[0].concat(routes[1]);
      })
    },
  }
}

