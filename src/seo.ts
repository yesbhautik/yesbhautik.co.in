export const SITE_URL = 'https://yesbhautik.co.in'
export const SITE_NAME = 'Bhautik Bavadiya (AKA Yesbhautik)'
export const SITE_AUTHOR = 'Bhautik Bavadiya'
export const SITE_HANDLE = '@yesbhautik'
export const SITE_LOCALE = 'en_IN'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/preview.png`
export const DEFAULT_DESCRIPTION = 'Bhautik Bavadiya is a global startup operator, founder, and technology consultant helping founders with business growth, go-to-market, AI products, crypto, Web3, TGE strategy, and scalable digital infrastructure.'

export interface SeoFrontmatter {
  title?: string
  seoTitle?: string
  display?: string
  description?: string
  desc?: string
  image?: string
  keywords?: string[] | string
  date?: string
  updated?: string
  draft?: boolean
  noindex?: boolean
}

export function cleanTitle(title = SITE_NAME) {
  return title.replace(/\s-\s.*$/, '').trim() || SITE_NAME
}

export function canonicalUrl(path = '/') {
  const normalized = path
    .replace(/\/index(?:\.html)?$/, '/')
    .replace(/\.html$/, '')

  if (normalized === '/' || normalized === '')
    return SITE_URL

  return `${SITE_URL}${normalized.startsWith('/') ? normalized : `/${normalized}`}`
}

export function absoluteUrl(url = DEFAULT_OG_IMAGE) {
  if (/^https?:\/\//.test(url))
    return url
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

export function normalizeKeywords(value: SeoFrontmatter['keywords']) {
  if (Array.isArray(value))
    return value.filter(Boolean).join(', ')
  return value
}

export function resolveSeo(frontmatter: SeoFrontmatter = {}, path = '/') {
  const pageTitle = frontmatter.title || SITE_NAME
  const baseTitle = frontmatter.seoTitle || cleanTitle(pageTitle)
  const title = path === '/'
    ? `${SITE_NAME} | Global Startup, AI, Crypto & Business Growth Consultant`
    : `${baseTitle} by ${SITE_AUTHOR} | Global Startup, AI & Business Strategy`
  const description = frontmatter.description || frontmatter.desc || DEFAULT_DESCRIPTION
  const url = canonicalUrl(path)
  const image = absoluteUrl(frontmatter.image || DEFAULT_OG_IMAGE)
  const keywords = normalizeKeywords(frontmatter.keywords)

  return {
    description,
    image,
    keywords,
    title,
    url,
  }
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': SITE_AUTHOR,
    'alternateName': 'Yesbhautik',
    'url': SITE_URL,
    'image': `${SITE_URL}/avatar.png`,
    'email': 'hi@yesbhautik.co.in',
    'jobTitle': 'Founder, startup operator, and technology consultant',
    'homeLocation': {
      '@type': 'Place',
      'name': 'Ahmedabad, India',
    },
    'knowsAbout': [
      'Startup growth',
      'Business development',
      'Go-to-market strategy',
      'Token generation events',
      'Crypto and Web3',
      'Artificial intelligence',
      'Machine learning',
      'AI products',
      'Technology strategy',
      'Product management',
      'Fundraising support',
      'Automation',
      'Open source',
    ],
    'sameAs': [
      'https://github.com/yesbhautik',
      'https://www.linkedin.com/in/yesbhautik',
      'https://x.com/yesbhautik',
      'https://t.me/yesbhautik',
      'https://www.instagram.com/yesbhautik',
      'https://bsky.app/profile/yesbhautik.co.in',
      'https://www.youtube.com/yesbhautik',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_NAME,
    'alternateName': 'Yesbhautik',
    'url': SITE_URL,
    'publisher': {
      '@type': 'Person',
      'name': SITE_AUTHOR,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'YBX Labs',
    'url': 'https://yesbhautikx.co.in',
    'founder': {
      '@type': 'Person',
      'name': SITE_AUTHOR,
      'url': SITE_URL,
    },
  }
}

export function serviceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Global startup, AI, crypto, and business growth consulting',
    'url': `${SITE_URL}/chat`,
    'areaServed': 'Worldwide',
    'provider': {
      '@type': 'Person',
      'name': SITE_AUTHOR,
      'url': SITE_URL,
    },
    'serviceType': [
      'Business development',
      'Go-to-market consulting',
      'AI product strategy',
      'Machine learning product consulting',
      'Crypto and Web3 strategy',
      'Token generation event advisory',
      'Startup growth consulting',
      'Technology leadership',
    ],
  }
}

export function webPageJsonLd(frontmatter: SeoFrontmatter = {}, path = '/') {
  const seo = resolveSeo(frontmatter, path)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': seo.title,
    'description': seo.description,
    'url': seo.url,
    'image': seo.image,
    'isPartOf': {
      '@type': 'WebSite',
      'name': SITE_NAME,
      'url': SITE_URL,
    },
  }
}
