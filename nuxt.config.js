require('dotenv').config()
const contentful = require('contentful')

module.exports = {  
  modules: ['@nuxtjs/dotenv', '~modules/blacklist-routes.js'],
  devModules: ['@nuxtjs/tailwindcss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'smashing-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Extend router to support dynamic page structure
  */
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '/:item/:page',
        component: resolve(__dirname, 'pages/content.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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
        space:  process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });

      const teamRoutes = client.getEntries({
          content_type: 'team'
      }).then((response) => {
          return response.items.map(entry => {
              return {
                  route: `/teams/${entry.fields.slug}`,
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
        return routes[0].concat(routes[1])
      })
    },
  }
}

