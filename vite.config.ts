import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
import WindiCSS from "vite-plugin-windicss";
import { BlhxProxyConfig } from "./config/proxy.config";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    server: {
      host: "0.0.0.0",
      port: 8000,
      proxy: {
        ...BlhxProxyConfig,
      },
    },
    plugins: [
      react(),
      ViteAliases({
        prefix: "@/",
      }) as unknown as PluginOption[],
      WindiCSS(),
    ],
  };
});
