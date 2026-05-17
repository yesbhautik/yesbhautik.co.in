import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import {
  organizationJsonLd,
  personJsonLd,
  resolveSeo,
  serviceJsonLd,
  SITE_AUTHOR,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  webPageJsonLd,
  websiteJsonLd,
} from '../src/seo'

interface PageInfo {
  route: string
  htmlPath: string
  frontmatter: Record<string, any>
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function routeFromFile(file: string) {
  let route = file
    .replace(/^pages/, '')
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')

  if (!route)
    route = '/'

  return route
}

function htmlPathFromRoute(route: string) {
  if (route === '/')
    return 'dist/index.html'
  return `dist${route}.html`
}

function jsonLdForPage(frontmatter: Record<string, any>, route: string) {
  const graph = [
    personJsonLd(),
    websiteJsonLd(),
    webPageJsonLd(frontmatter, route),
  ]

  if (route === '/')
    graph.push(organizationJsonLd())
  if (route === '/' || route === '/chat')
    graph.push(serviceJsonLd())

  return JSON.stringify(graph)
}

function metaTag(name: string, content?: string) {
  if (!content)
    return ''
  return `<meta name="${name}" content="${escapeHtml(content)}">`
}

function propertyTag(property: string, content?: string) {
  if (!content)
    return ''
  return `<meta property="${property}" content="${escapeHtml(content)}">`
}

function buildSeoHead(page: PageInfo) {
  const seo = resolveSeo(page.frontmatter, page.route)
  const robots = page.frontmatter.noindex
    ? 'noindex,nofollow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    metaTag('description', seo.description),
    metaTag('author', SITE_NAME),
    metaTag('robots', robots),
    metaTag('keywords', seo.keywords),
    `<link rel="canonical" href="${escapeHtml(seo.url)}">`,
    `<link rel="alternate" type="application/rss+xml" title="${escapeHtml(`${SITE_AUTHOR}'s Blog`)}" href="${SITE_URL}/feed.xml">`,
    propertyTag('og:type', 'website'),
    propertyTag('og:locale', SITE_LOCALE),
    propertyTag('og:site_name', SITE_NAME),
    propertyTag('og:title', seo.title),
    propertyTag('og:description', seo.description),
    propertyTag('og:url', seo.url),
    propertyTag('og:image', seo.image),
    propertyTag('og:image:alt', seo.title),
    metaTag('twitter:card', 'summary_large_image'),
    metaTag('twitter:site', '@yesbhautik'),
    metaTag('twitter:creator', '@yesbhautik'),
    metaTag('twitter:title', seo.title),
    metaTag('twitter:description', seo.description),
    metaTag('twitter:image', seo.image),
    `<script type="application/ld+json">${jsonLdForPage(page.frontmatter, page.route).replace(/</g, '\\u003C')}</script>`,
  ].filter(Boolean).join('')
}

function removeExistingSeo(html: string) {
  return html
    .replace(/<title>.*?<\/title>/, '')
    .replace(/<meta (?:name|property)="(?:description|author|robots|keywords|twitter:[^"]+|og:[^"]+)"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<link rel="alternate" type="application\/rss\+xml"[^>]*>/g, '')
    .replace(/<script type="application\/ld\+json">.*?<\/script>/g, '')
}

function buildAdminSeoHead() {
  const title = 'Private Content Manager for Yesbhautik Website'
  const description = 'Private administrative content manager for the Yesbhautik portfolio website. This utility page is not intended for search indexing.'

  return [
    `<title>${escapeHtml(title)}</title>`,
    metaTag('description', description),
    metaTag('robots', 'noindex,nofollow,noarchive'),
  ].join('')
}

async function collectPages() {
  const files = await fg('pages/**/*.md')
  const pages: PageInfo[] = []

  for (const file of files) {
    if (file.includes('[...404]'))
      continue

    const raw = await fs.readFile(file, 'utf-8')
    const { data } = matter(raw)
    if (data.draft || data.redirect)
      continue

    const route = routeFromFile(file)
    pages.push({
      route,
      htmlPath: htmlPathFromRoute(route),
      frontmatter: data,
    })
  }

  return pages
}

async function run() {
  const pages = await collectPages()

  for (const page of pages) {
    if (!await fs.pathExists(page.htmlPath))
      continue

    const html = await fs.readFile(page.htmlPath, 'utf-8')
    const cleanHtml = removeExistingSeo(html)
    const nextHtml = cleanHtml.replace('</head>', `${buildSeoHead(page)}</head>`)
    await fs.writeFile(page.htmlPath, nextHtml, 'utf-8')
  }

  if (await fs.pathExists('dist/admin/index.html')) {
    const html = await fs.readFile('dist/admin/index.html', 'utf-8')
    const cleanHtml = removeExistingSeo(html)
    await fs.writeFile('dist/admin/index.html', cleanHtml.replace('</head>', `${buildAdminSeoHead()}</head>`), 'utf-8')
  }
}

run()
