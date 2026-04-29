import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // delay to let Sanity CDN propagate before revalidating
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    revalidateTag('portfolio', 'max')
    return NextResponse.json({ revalidated: ['portfolio'] })
  } catch (err) {
    return new Response((err as Error).message, { status: 500 })
  }
}
