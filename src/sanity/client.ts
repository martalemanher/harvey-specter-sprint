import { createClient, defineQuery } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const PORTFOLIO_QUERY = defineQuery(`
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

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return client.fetch(PORTFOLIO_QUERY, {}, { next: { tags: ['portfolio'] } })
}
