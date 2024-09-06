# Solid.js プロジェクトテンプレート

このプロジェクトは、Solid.js を使用した開発のためのテンプレートです。

## 特徴

- Solid.js
- TypeScript
- Vite
- solid-styled-components
- @solidjs/router
- Firebase

## 始め方

1. このリポジトリをクローンまたはダウンロードします。

```
$ git clone https://github.com/otomatty/solid-app-template.git
```

2. 依存関係をインストールします：

```bash
$ npm install # or pnpm install or yarn install
```

3. 開発サーバーを起動します：

```bash
$ npm run dev
```

4. ブラウザで [http://localhost:5173](http://localhost:5173) を開きます。

## 利用可能なスクリプト

プロジェクトディレクトリで以下のコマンドを実行できます：

### `npm run dev`

開発モードでアプリを実行します。

### `npm run build`

本番用にアプリをビルドします。`dist` フォルダに出力されます。

### `npm run serve`

ビルドされたアプリをローカルでプレビューします。

## プロジェクト構造

```
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   └── (コンポーネント名)
│   │       ├── (コンポーネント名).styled.ts
│   │       └── (コンポーネント名).tsx
│   ├── data
│   ├── firebase
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   ├── types
│   ├── utils
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## コンポーネント構造

`components` フォルダ内の各コンポーネントは、以下の 2 つのファイルを含む独自のフォルダを持ちます：

1. TypeScript JSX ファイル（例：`Header.tsx`）
2. styled-components ファイル（例：`Header.styled.ts`）

この構造により、コンポーネントのロジックとスタイルを整理し、保守しやすくなります。

## ディレクトリ構造の詳細

- `src/components`: 再利用可能な UI コンポーネントを格納します。
- `src/pages`: アプリケーションの各ページコンポーネントを格納します。
- `src/firebase`: Firebase 関連の設定と関数を格納します。
- `src/data`: データモデルや状態管理関連のファイルを格納します。
- `src/utils`: ユーティリティ関数を格納します。
- `src/types`: TypeScript 型定義ファイルを格納します。

## 貢献

プロジェクトへの貢献は歓迎します。プルリクエストを送信する前に、変更について議論するためにイシューを開いてください。

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。
