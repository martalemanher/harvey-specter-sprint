import { metadata as studioMetadata, viewport as studioViewport, NextStudioLayout } from 'next-sanity/studio'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = studioMetadata
export const viewport: Viewport = studioViewport as Viewport

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <NextStudioLayout>{children}</NextStudioLayout>
}
