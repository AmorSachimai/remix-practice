## 概要

共通で利用するスタイル・reset.css を提供する。
グローバルスタイルは[vanilla-extract](https://vanilla-extract.style/)によって定義される。
reset.css もそのうち移行する。

### 利用方法

```ts
// component.css.ts
import { globalStyles } from "@my-packages/style-schema";
import { style } from "@vanilla-extract/css";

export const title = style({
  color: globalStyles.color.brand,
});
```

### プロジェクトに組み込む

#### vite の場合

```ts
// vite.config.ts
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
});
```

#### reset.css はエントリーポイントとなるファイルに import する。

```ts
// エントリーポイント.ts
import "@my-packages/style-schema/reset.css";
```
