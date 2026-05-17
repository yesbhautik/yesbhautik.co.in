import { dirname } from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { SITE_URL } from '../src/seo'

interface SitemapEntry {
  loc: string
  lastmod?: string
  priority: string
  changefreq: string
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
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

function priorityForRoute(route: string) {
  if (route === '/')
    return '1.0'
  if (['/chat', '/projects', '/giving-talks'].includes(route))
    return '0.9'
  if (['/posts', '/uses', '/photos', '/media'].includes(route))
    return '0.8'
  if (route.startsWith('/posts/'))
    return '0.7'
  return '0.6'
}

function changefreqForRoute(route: string) {
  if (route === '/' || route === '/projects' || route === '/chat')
    return 'weekly'
  if (route.startsWith('/posts/'))
    return 'monthly'
  return 'monthly'
}

async function run() {
  const files = await fg('pages/**/*.md')
  const entries: SitemapEntry[] = []

  for (const file of files) {
    if (file.includes('[...404]'))
      continue

    const raw = await fs.readFile(file, 'utf-8')
    const { data } = matter(raw)
    if (data.draft || data.noindex || data.redirect)
      continue

    const route = routeFromFile(file)
    entries.push({
      loc: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
      lastmod: data.updated || data.date
        ? new Date(data.updated || data.date).toISOString()
        : undefined,
      priority: priorityForRoute(route),
      changefreq: changefreqForRoute(route),
    })
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : ''}    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

  await fs.ensureDir(dirname('dist/sitemap.xml'))
  await fs.writeFile('dist/sitemap.xml', xml, 'utf-8')
}

run()
