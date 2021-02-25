import type { Plugin } from "vite";

export function tauriPlugin(): Plugin {
	return {
		name: "vite-plugin-tauri",
		transform(src, id) {
			console.log("transform runned");
            return src;
		},
	};
}

export default tauriPlugin;
