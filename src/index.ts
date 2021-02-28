import type { Plugin } from "vite";

export default function tauriPlugin() {

	return {
		name: 'vite-plugin-tauri',
		enforce: 'pre',

		configureServer() {
			console.log("configureServer");
		},
	};
}