# Remix の勉強

図書システムを作成予定。

Q: なぜ図書システム？

A: 単純かつ基礎的なルーティングと SSR が学べる。

## 使用技術

- Nodejs(バージョンは[.node-version](.node-version)を参照)
- フレームワーク: Remix
- 他: テキトーに

## 開発環境

パッケージ管理は pnpm で行っている。

```bash
pnpm install
```

### lint & format

[Biomejs](https://biomejs.dev/ja/) を使っている。
ルールは基本的に推奨設定を利用している。詳しくは[設定ファイル](biome.json)を参照。

```bash
# format
pnpm format

# lint
pnpm lint
```
