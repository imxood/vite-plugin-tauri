import { defineConfig } from "vite";
import tauriPlugin from "vite-plugin-tauri";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
	plugins: [reactRefresh(), tauriPlugin()],
});
