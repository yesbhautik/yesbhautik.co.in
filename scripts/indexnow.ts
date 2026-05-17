import fs from 'fs-extra'
import { SITE_URL } from '../src/seo'

const HOST = new URL(SITE_URL).host
const ENDPOINT = 'https://api.indexnow.org/indexnow'

function extractUrls(sitemap: string) {
  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), match => match[1])
}

async function run() {
  const keyFiles = await fs.readdir('public')
  const keyFile = keyFiles.find(file => /^[a-f0-9]{32}\.txt$/i.test(file))
  if (!keyFile)
    throw new Error('No IndexNow key file found in public/<32-character-key>.txt')

  const keyPath = `public/${keyFile}`
  const expectedKey = keyFile.replace(/\.txt$/, '')
  const key = (await fs.readFile(keyPath, 'utf-8')).trim()
  if (!key)
    throw new Error(`${keyPath} is empty`)
  if (key !== expectedKey)
    throw new Error(`${keyPath} must contain the same key as its filename`)

  const sitemap = await fs.readFile('dist/sitemap.xml', 'utf-8')
  const urlList = extractUrls(sitemap)

  if (!urlList.length) {
    console.log('No URLs found in dist/sitemap.xml')
    return
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `${SITE_URL}/${keyFile}`,
      urlList,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`IndexNow submission failed: ${response.status} ${response.statusText}\n${body}`)
  }

  console.log(`Submitted ${urlList.length} URLs to IndexNow`)
}

run()
