import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

// ビルダーの設定例(ここではストーリーブック用に用意)
export default defineConfig({
  plugins: [vanillaExtractPlugin()],
});
