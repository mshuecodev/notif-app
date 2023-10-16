/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (!isServer && !dev) {
			config.output.publicPath = "/_next/static/"
		}

		return config
	},
	workboxOpts: {
		swSrc: "./firebase-messaging-sw.js",
		swDest: "static/firebase-messaging-sw.js"
	}
}

module.exports = nextConfig
