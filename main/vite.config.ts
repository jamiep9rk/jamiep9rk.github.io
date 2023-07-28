import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
  ],
  // build: {
  //     commonjsOptions: { include: ['@mui/material'] },
  // },
  optimizeDeps: {
    disabled: false,
  },
  resolve: {
    alias: [
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      {
        find: "@common",
        replacement: resolve(__dirname, "src/components/common"),
      },
    ],
  },
});
