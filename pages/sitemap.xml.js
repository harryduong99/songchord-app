const DOMAIN_NAME = process.env.APP_DOMAIN

function generateSiteMap(songs) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${songs.map(({ slug }) => {
      return `
          <url>
            <loc>${`${DOMAIN_NAME}/detail/${slug}`}</loc>
            <lastmod>2022-12-12</lastmod>
          </url>
          `
    }).join('')}
  </urlset>
`
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${process.env.API_CLIENT}/song/all/why`)
  const songs = await request.json()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(songs)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
