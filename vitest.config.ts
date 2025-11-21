import * as path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-vitest.ts",
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@styles": path.resolve(__dirname, "./src/shared/styles"),
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@types": path.resolve(__dirname, "./src/shared/types"),
      "@services": path.resolve(__dirname, "./src/shared/services"),
      "@public": path.resolve(__dirname, "./src/modules/public"),
      "@sign": path.resolve(__dirname, "./src/modules/sign"),
    },
  },
});
