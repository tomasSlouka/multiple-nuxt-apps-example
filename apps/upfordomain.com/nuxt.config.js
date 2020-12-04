
export default {
	srcDir: __dirname,
	buildDir: 'apps/upfordomain.com/.nuxt/upfordomain.com',
	generate: {
		dir: 'apps/upfordomain.com/generate',
	  },
	server: {
		port: 3000, // default: 3000 for localhost | for production server default is 8080 // has to be the same as the port that is using in custom.conf
		host: 'localhost' // default: localhost
	},
	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	ssr: true,
	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'server',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	head: {
        title: 'Domains up for rent.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { hid: 'title', name: "title", content: "Domains up for rent." },
            { hid: 'description', name: "description", content: "Upfordomain - a secure way of renting domains." },
            { hid: 'og-type', property: "og:type", content: "website" },
            { hid: 'og-url', property: "og:url", content: "https://upfordomain.com/" },
            { hid: 'og-title', property: "og:title", content: "Domains up for rent." },
            { hid: 'og-description', property: "og:description", content: "Upfordomain - a secure way of renting domains." },
            { hid: 'og-image', property: "og:image", content: "https://upfordomain.com/_static/upfordomain/cover-twitter.png" },
            { hid: 'og-image:type', property: 'og:image:type', content: 'image/png' },
            { hid: 'og-image:width', property: 'og:image:width', content: '1200' },
            { hid: 'og-image:height', property: 'og:image:height', content: '628' },
            { hid: 'twitter-card', property: "twitter:card", content: "summary_large_image" },
            { hid: 'twitter-url', property: "twitter:url", content: "https://upfordomain.com/" },
            { hid: 'twitter-title', property: "twitter:title", content: "Domains up for rent." },
            { hid: 'twitter-description', property: "twitter:description", content: "Upfordomain - a secure way of renting domains." },
            { hid: 'twitter-image', property: "twitter:image", content: "https://upfordomain.com/_static/upfordomain/cover-twitter.png" },

            { hid: 'apple-mobile-web-app-title', name: "apple-mobile-web-app-title", content: "Upfordomain" },
            { hid: 'application-name', name: "application-name", content: "Upfordomain" },
            { hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#00a300" },
            { hid: 'theme-color', name: "theme-color", content: "#ffffff" }
        ],
        link: [
            { hid: 'apple-touch-icon', rel: "apple-touch-icon", sizes: "180x180", href: "/_static/upfordomain/apple-icon-180x180.png" },
            { hid: 'android-chrome-192x192', rel: 'icon', type: 'image/png', sizes: '192x192', href: '/_static/upfordomain/android-icon-192x192.png' },
            { hid: 'favicon-16x16', rel: "icon", type: "image/png", sizes: "16x16", href: "/_static/upfordomain/favicon-16x16.png" },
            { hid: 'favicon-32x32', rel: "icon", type: "image/png", sizes: "32x32", href: "/_static/upfordomain/favicon-32x32.png" },
            { hid: 'favicon-96x96', rel: "icon", type: "image/png", sizes: "96x96", href: "/_static/upfordomain/favicon-96x96.png" },
            { hid: 'manifest', rel: "manifest", href: "/_static/upfordomain/manifest.json" },
            { hid: 'mask-icon', rel: "mask-icon", href: "/_static/upfordomain/safari-pinned-tab.svg", color: "#39ac37" }
        ],
        script: [
            // { src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' }
        ],
    },
	/*
	** Global CSS
	*/
	css: [
        "~assets/css/global.css",
        "~assets/css/_system/flex.css",
        "~assets/css/_system/grid.css",
        "~assets/css/_system/webbase.css",
        "~assets/css/_system/animations.css",
	],
	loading: { color: '#ffeec3', height: '4px', width: '100%' },
	pageTransition: {
        name: 'layout',
        mode: 'out-in'
    },
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
		{ src: '~/plugins/axios.js' },
		{ src: '~plugins/vue-scrollto.js', ssr: false, defer: true },
		{ src: '~/plugins/ga.js', ssr: false, defer: true },
	],
	/*
	** Auto import components
	** See https://nuxtjs.org/api/configuration-components
	*/
	components: false,
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
	}
}
