
export default {
	srcDir: __dirname,
	buildDir: 'apps/tulaveknizky.sk/.nuxt/tulaveknizky.sk',
	generate: {
	  dir: 'apps/tulaveknizky.sk/generate',
	},
	server: {
		port: 3060, // default: 3000 for localhost | for production server default is 8080 // has to be the same as the port that is using in custom.conf
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
        title: 'Túlavé knižky | Online požičovňa kníh.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { hid: 'title', name: "title", content: "Túlavé knižky | Online požičovňa kníh." },
            { hid: 'description', name: "description", content: "Požičaj si najnovšie knižné tituly, bez navštevy knižnice." },
            { hid: 'og-type', property: "og:type", content: "website" },
            { hid: 'og-url', property: "og:url", content: "https://tulaveknizky.sk/" },
            { hid: 'og-title', property: "og:title", content: "Túlavé knižky | Online požičovňa kníh." },
            { hid: 'og-description', property: "og:description", content: "Požičaj si najnovšie knižné tituly, bez navštevy knižnice." },
            { hid: 'og-image', property: "og:image", content: "https://tulaveknizky.sk/_static/tulaveknizky/cover-twitter.png" },
            { hid: 'og-image:type', property: 'og:image:type', content: 'image/png' },
            { hid: 'og-image:width', property: 'og:image:width', content: '1200' },
            { hid: 'og-image:height', property: 'og:image:height', content: '628' },
            { hid: 'twitter-card', property: "twitter:card", content: "summary_large_image" },
            { hid: 'twitter-url', property: "twitter:url", content: "https://tulaveknizky.sk/" },
            { hid: 'twitter-title', property: "twitter:title", content: "Túlavé knižky | Online požičovňa kníh." },
            { hid: 'twitter-description', property: "twitter:description", content: "Požičaj si najnovšie knižné tituly, bez navštevy knižnice." },
            { hid: 'twitter-image', property: "twitter:image", content: "https://tulaveknizky.sk/_static/tulaveknizky/cover-twitter.png" },

            { hid: 'apple-mobile-web-app-title', name: "apple-mobile-web-app-title", content: "Túlavé knižky | Online požičovňa kníh." },
            { hid: 'application-name', name: "application-name", content: "Túlavé knižky | Online požičovňa kníh." },
            
			{ hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#ffffff" },
			{ hid: 'msapplication-TileImage', name: "msapplication-TileImage", content: "/_static/tulaveknizky/ms-icon-144x144.png" },
            { hid: 'theme-color', name: "theme-color", content: "#ffffff" }
        ],
        link: [
			{ hid: 'apple-touch-icon-57x57', rel: "apple-touch-icon", sizes: "57x57", href: "/_static/tulaveknizky/apple-icon-57x57.png" },
			{ hid: 'apple-touch-icon-60x60', rel: "apple-touch-icon", sizes: "60x60", href: "/_static/tulaveknizky/apple-icon-60x60.png" },
			{ hid: 'apple-touch-icon-72x72', rel: "apple-touch-icon", sizes: "72x72", href: "/_static/tulaveknizky/apple-icon-72x72.png" },
			{ hid: 'apple-touch-icon-76x76', rel: "apple-touch-icon", sizes: "76x76", href: "/_static/tulaveknizky/apple-icon-76x76.png" },
			{ hid: 'apple-touch-icon-114x114', rel: "apple-touch-icon", sizes: "114x114", href: "/_static/tulaveknizky/apple-icon-114x114.png" },
			{ hid: 'apple-touch-icon-120x120', rel: "apple-touch-icon", sizes: "120x120", href: "/_static/tulaveknizky/apple-icon-120x120.png" },
			{ hid: 'apple-touch-icon-144x144', rel: "apple-touch-icon", sizes: "144x144", href: "/_static/tulaveknizky/apple-icon-144x144.png" },
			{ hid: 'apple-touch-icon-152x152', rel: "apple-touch-icon", sizes: "152x152", href: "/_static/tulaveknizky/apple-icon-152x152.png" },
			{ hid: 'apple-touch-icon-180x180', rel: "apple-touch-icon", sizes: "180x180", href: "/_static/tulaveknizky/apple-icon-180x180.png" },
			{ hid: 'icon-192x192', rel: "icon", type: "image/png", sizes: "192x192" , href: "/_static/tulaveknizky/android-icon-192x192.png" },
			{ hid: 'icon-32x32', rel: "icon", type: "image/png", sizes: "32x32", href: "/_static/tulaveknizky/favicon-32x32.png" },
			{ hid: 'icon-96x96', rel: "icon", type: "image/png", sizes: "96x96", href: "/_static/tulaveknizky/favicon-96x96.png" },
			{ hid: 'icon-16x16', rel: "icon", type: "image/png", sizes: "16x16", href: "/_static/tulaveknizky/favicon-16x16.png" },
			{ hid: 'manifest', rel: "manifest", href: "/_static/tulaveknizky/manifest.json" },
        ],
        script: [
            { src: 'https://js.stripe.com/v3/' }
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
	loading: { color: '#ffd401', height: '2px', width: '100%' },
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
		{ src: '~/plugins/gtag.js', ssr: false, defer: true },
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
		'cookie-universal-nuxt',
    	'vue-scrollto/nuxt',
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
