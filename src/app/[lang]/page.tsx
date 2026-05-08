import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import { getPortfolioItems } from '@/sanity/client'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutIntroSection from '../components/AboutIntroSection'
import AboutSection from '../components/AboutSection'
import FullBleedPhotoSection from '../components/FullBleedPhotoSection'
import ServicesSection from '../components/ServicesSection'
import SelectedWorkSection from '../components/SelectedWorkSection'
import TestimonialsSection from '../components/TestimonialsSection'
import LatestNewsSection from '../components/LatestNewsSection'
import FooterSection from '../components/FooterSection'

type Props = { params: Promise<{ lang: string }> }

export default async function Home({ params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const [dict, portfolioItems] = await Promise.all([
    getDictionary(lang),
    getPortfolioItems(lang),
  ])

  return (
    <main className="bg-[#fafafa]">
      <div className="relative z-10 bg-[#fafafa]">
        <Navbar dict={dict.nav} locale={lang} />
        <HeroSection dict={dict.hero} />
        <AboutIntroSection dict={dict.aboutIntro} />
        <AboutSection dict={dict.about} />
        <FullBleedPhotoSection />
        <ServicesSection dict={dict.services} />
        <SelectedWorkSection dict={dict.selectedWork} items={portfolioItems} />
        <TestimonialsSection dict={dict.testimonials} />
        <LatestNewsSection dict={dict.latestNews} />
      </div>
      <div className="sticky bottom-0 z-0">
        <FooterSection dict={dict.footer} />
      </div>
    </main>
  )
}
