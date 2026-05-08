import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

type Props = { params: Promise<{ lang: string }>; children: React.ReactNode }

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: lang === 'en' ? '/' : `/${lang}`,
      languages: { en: '/', es: '/es' },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return <>{children}</>
}
