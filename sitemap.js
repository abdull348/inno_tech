// sitemap.js
import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/product', changefreq: 'weekly', priority: 0.8 },
];

const stream = new SitemapStream({
  hostname: 'https://innotechtechnologies.us/',
});

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  writeFileSync('./public/sitemap.xml', data.toString());
});
