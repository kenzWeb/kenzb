// vite.config.ts
import { paraglide } from "file:///Users/magomedsoltan/Desktop/code/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/strangeProject/node_modules/.pnpm/@inlang+paraglide-sveltekit@0.11.1_@sveltejs+kit@2.6.4_@sveltejs+vite-plugin-svelte@4.0.0-nex_pljah6zxrsbg6tapfmpc4ffeoa/node_modules/@inlang/paraglide-sveltekit/dist/vite/index.js";
import { sveltekit } from "file:///Users/magomedsoltan/Desktop/code/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/strangeProject/node_modules/.pnpm/@sveltejs+kit@2.6.4_@sveltejs+vite-plugin-svelte@4.0.0-next.8_svelte@5.0.0-next.264_vite@5.4._gbycvuo4midoihkbpas3iq5tpy/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import dotenv from "file:///Users/magomedsoltan/Desktop/code/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/strangeProject/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js";
import { defineConfig } from "file:///Users/magomedsoltan/Desktop/code/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/strangeProject/node_modules/.pnpm/vite@5.4.8_@types+node@22.5.5_sass-embedded@1.79.4_sass@1.79.4/node_modules/vite/dist/node/index.js";
dotenv.config();
var vite_config_default = defineConfig({
  plugins: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide"
    }),
    sveltekit()
  ],
  define: {
    "process.env": process.env
  },
  resolve: {
    alias: {
      "@sveltestack/svelte-query": "@sveltestack/svelte-query/src"
    }
  },
  css: {
    postcss: "./postcss.config.js"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFnb21lZHNvbHRhbi9EZXNrdG9wL2NvZGUvXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDRCL3N0cmFuZ2VQcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFnb21lZHNvbHRhbi9EZXNrdG9wL2NvZGUvXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDRCL3N0cmFuZ2VQcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWdvbWVkc29sdGFuL0Rlc2t0b3AvY29kZS8lRDAlQkYlRDElODAlRDAlQkUlRDAlQjUlRDAlQkElRDElODIlRDElOEIvc3RyYW5nZVByb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBwYXJhZ2xpZGUgfSBmcm9tICdAaW5sYW5nL3BhcmFnbGlkZS1zdmVsdGVraXQvdml0ZSc7XG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmRvdGVudi5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW1xuXHRcdHBhcmFnbGlkZSh7XG5cdFx0XHRwcm9qZWN0OiAnLi9wcm9qZWN0LmlubGFuZycsXG5cdFx0XHRvdXRkaXI6ICcuL3NyYy9saWIvcGFyYWdsaWRlJ1xuXHRcdH0pLFxuXHRcdHN2ZWx0ZWtpdCgpXG5cdF0sXG5cdGRlZmluZToge1xuXHRcdCdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52XG5cdH0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0J0BzdmVsdGVzdGFjay9zdmVsdGUtcXVlcnknOiAnQHN2ZWx0ZXN0YWNrL3N2ZWx0ZS1xdWVyeS9zcmMnXG5cdFx0fVxuXHR9LFxuXHRjc3M6IHtcblx0XHRwb3N0Y3NzOiAnLi9wb3N0Y3NzLmNvbmZpZy5qcydcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLFNBQVMsaUJBQWlCO0FBQ3ZaLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU8sWUFBWTtBQUNuQixTQUFTLG9CQUFvQjtBQUU3QixPQUFPLE9BQU87QUFFZCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsSUFDVCxDQUFDO0FBQUEsSUFDRCxVQUFVO0FBQUEsRUFDWDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsZUFBZSxRQUFRO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLDZCQUE2QjtBQUFBLElBQzlCO0FBQUEsRUFDRDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0osU0FBUztBQUFBLEVBQ1Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
