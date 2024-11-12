import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/react-sass/",  // та шляпа вміє додавати в силку react-sass, тобто буде така лінка http://localhost:5175/react-sass/
  css: {
    // завдяки цьому термінал не свариться на те що sass треба оновити
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
