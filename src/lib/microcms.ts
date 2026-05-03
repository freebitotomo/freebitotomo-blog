import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

// APIキー未設定の場合はダミー値でクライアントを作成（実際のAPI呼び出しはtry/catchで処理）
export const client = createClient({
  serviceDomain: serviceDomain || 'placeholder',
  apiKey: apiKey || 'placeholder',
});

export type Article = {
  id: string;
  title: string;
  content: string;
  description: string;
  publishedAt: string;
  category: {
    id: string;
    name: string;
  } | null;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  } | null;
};

export type ArticleList = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function getArticles(limit = 10, offset = 0): Promise<ArticleList> {
  return await client.get<ArticleList>({
    endpoint: 'articles',
    queries: { limit, offset, orders: '-publishedAt' },
  });
}

export async function getArticle(slug: string): Promise<Article> {
  return await client.get<Article>({
    endpoint: 'articles',
    contentId: slug,
  });
}
