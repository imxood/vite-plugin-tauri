import { defineConfig } from "vite";
import tauriPlugin from "vite-plugin-tauri";

export default defineConfig({
	plugins: [tauriPlugin()],
});
