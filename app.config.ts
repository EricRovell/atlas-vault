import { defineConfig } from "@solidjs/start/config";
import pluginNesting from "postcss-nesting";

export default defineConfig({
	vite: {
		css: {
			postcss: {
				plugins: [
					pluginNesting
				]
			}
		},
		server: {
			host: true,
			port: 3000
		}
	}
});
