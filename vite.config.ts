import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import splitVendorChunkPlugin from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    // , splitVendorChunkPlugin()
  ],
  resolve:{
    alias: {
      "@": resolve(__dirname,'src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `$injectedColor: orange;`,
  //     },
  //     // less: {
  //     //   math: "parens-division",
  //     // },
  //   },
  //   devSourcemap:true
  // },
});
