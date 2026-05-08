import { createClient, defineQuery } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const PORTFOLIO_QUERY_EN = defineQuery(`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt
    },
    tags,
    projectUrl
  }
`)

const PORTFOLIO_QUERY_ES = defineQuery(`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    "title": coalesce(titleEs, title),
    "slug": slug.current,
    coverImage {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt
    },
    "tags": coalesce(tagsEs, tags),
    projectUrl
  }
`)

export type PortfolioItem = {
  _id: string
  title: string
  slug: string
  coverImage: {
    asset: { _id: string; url: string; metadata?: { lqip?: string; dimensions?: { width: number; height: number } } }
    alt: string
  } | null
  tags: string[]
  projectUrl?: string
}

export async function getPortfolioItems(locale = 'en'): Promise<PortfolioItem[]> {
  const query = locale === 'es' ? PORTFOLIO_QUERY_ES : PORTFOLIO_QUERY_EN
  return client.fetch(query, {}, { next: { tags: ['portfolio'] } })
}
