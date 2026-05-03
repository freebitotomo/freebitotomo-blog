import { createClient } from 'microcms-js-sdk';

type MicroCMSEnv = {
  MICROCMS_SERVICE_DOMAIN: string;
  MICROCMS_API_KEY: string;
};

function getClient(env: MicroCMSEnv) {
  return createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY,
  });
}

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

export async function getArticles(env: MicroCMSEnv, limit = 10, offset = 0): Promise<ArticleList> {
  return await getClient(env).get<ArticleList>({
    endpoint: 'articles',
    queries: { limit, offset, orders: '-publishedAt' },
  });
}

export async function getArticle(env: MicroCMSEnv, slug: string): Promise<Article> {
  return await getClient(env).get<Article>({
    endpoint: 'articles',
    contentId: slug,
  });
}
