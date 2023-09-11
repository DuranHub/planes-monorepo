
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
	cacheDirectory: './node_modules/.cache/remix',
	serverModuleFormat: 'esm',
	serverPlatform: 'node',
	tailwind: true,
	postcss: true,
	watchPaths: ['./tailwind.config.ts'],
	future: {
		v2_headers: true,
		v2_meta: true,
		v2_errorBoundary: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
		v2_dev: true,
	},
}
