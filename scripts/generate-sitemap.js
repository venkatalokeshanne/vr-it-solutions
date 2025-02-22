const fs = require('fs');
const glob = require('glob');
const prettier = require('prettier');

const WEBSITE_URL = 'https://vr-it-solutions.vercel.app';
const PAGES_DIR = 'src/app';
const OUTPUT_FILE = 'public/sitemap.xml';

async function generateSitemap() {
  try {
    // Get all page files
    const pages = glob.sync(`${PAGES_DIR}/**/page.{js,jsx,ts,tsx}`);

    // Generate sitemap entries
    const sitemapEntries = pages
      .map((page) => {
        const path = page
          .replace(`${PAGES_DIR}/`, '')
          .replace(/page\.(js|jsx|ts|tsx)/, '')
          .replace(/\[.*\]/, '');

        const route = path === 'page' ? '' : path;
        const url = `${WEBSITE_URL}/${route}`;

        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${route === '' ? '1.0' : '0.8'}</priority>
          </url>
        `;
      })
      .join('');

    // Create sitemap XML
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapEntries}
      </urlset>
    `;

    // Format and save
    const formattedSitemap = await prettier.format(sitemap, {
      parser: 'html',
    });

    fs.writeFileSync(OUTPUT_FILE, formattedSitemap);
    console.log(`✅ Sitemap generated at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();