# 60歳おひとりさまの老後マネー術

ブログサイト：https://freebitotomo.com

## 技術構成

- **フレームワーク**: Astro（静的サイト）
- **CMS**: MicroCMS
- **ホスティング**: Cloudflare Pages

## セットアップ手順

### 1. パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env` を作成し、MicroCMSのAPIキーを入力します。

```bash
cp .env.example .env
```

`.env` の中身：
```
MICROCMS_SERVICE_DOMAIN=あなたのサービスドメイン
MICROCMS_API_KEY=あなたのAPIキー
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:4321 を開くと確認できます。

### 4. ビルド

```bash
npm run build
```

`dist/` フォルダにビルド結果が出力されます。

## MicroCMS スキーマ設定

APIタイプ：**リスト形式**  
エンドポイント名：`articles`

| フィールドID | フィールド名 | 種類 |
|---|---|---|
| title | タイトル | テキストフィールド |
| content | 本文 | リッチエディタ |
| description | 概要（SEO用） | テキストフィールド |
| category | カテゴリ | コンテンツ参照 |
| thumbnail | サムネイル | 画像 |

## Cloudflare Pages 設定

- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `dist`
- **Node.jsバージョン**: 18以上
