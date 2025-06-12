// generate-sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://ahmedrazaportfolio.netlify.app/' });

  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  // Add all your routes here
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
  sitemap.write({ url: '/skills'});
  sitemap.write({ url: '/experience' });
  sitemap.write({ url: '/certificates' });
  sitemap.write({ url: '/projects' });
  sitemap.write({ url: '/contact' });

  sitemap.end();

  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap();
