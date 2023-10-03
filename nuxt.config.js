export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shopping Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {rel: 'stylesheet', href: '	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'},
    {rel: 'stylesheet', href: '	https://getbootstrap.com/docs/5.3/assets/css/docs.css'},
    {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css'},
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
    {rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'},
    {rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'},
    {rel: 'stylesheet', href: 'https://https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,500;1,500&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet.googleapis.com/css2?family=Merriweather+Sans:ital,wght@1,500&display=swap'},
  ],
  scripts: [
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', body: true},
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', body: true },
    { src: 'https://cdn.tailwindcss.com', body: true },
    { src: 'https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp', body: true },
]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
       // https://go.nuxtjs.dev/tailwindcss
       '@nuxtjs/tailwindcss',
       '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '127.0.0.1:3333/api',
    baseURL2: 'https://jylpaciooxarhelwslji.supabase.co', // Your API base URL
    Headers: {
      common: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bHBhY2lvb3hhcmhlbHdzbGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MjIxODYsImV4cCI6MjAxMTI5ODE4Nn0.DxbkTiy25jW5QSd3FgEvZm2G21JzU9kbcBSCdkOvmrU', // Example Authorization header
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: 'login', method: 'post', propertyName: 'data.token' },
            user: { url: 'me', method: 'get', propertyName: 'data' },
          	logout: false
         }
       }
      }
  }
}

