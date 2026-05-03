import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SITE = 'https://innotechtechnologies.us';
const DEFAULT_IMAGE = `${SITE}/assets/Hero1.webp`;
const SUFFIX = ' | InnoTech Technologies';

const upsertMeta = (key, value, useProperty = false) => {
  if (value === undefined || value === null || value === '') return;
  const attr = useProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', String(value));
};

const upsertCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertJsonLd = (id, data) => {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const SEO = ({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
  breadcrumb,
}) => {
  const fullTitle = title ? `${title}${SUFFIX}` : `InnoTech Technologies — Precision Lab Equipment Supplier in the USA`;
  const desc = description || 'Certified laboratory equipment for US research, diagnostics, and biotech. ISO certified, US-based technical support, 48-hour emergency dispatch.';
  const url = `${SITE}${path}`;
  const img = image || DEFAULT_IMAGE;
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';
  const breadcrumbKey = breadcrumb ? JSON.stringify(breadcrumb) : '';

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('description', desc);
    upsertMeta('og:title', fullTitle, true);
    upsertMeta('og:description', desc, true);
    upsertMeta('og:url', url, true);
    upsertMeta('og:type', type, true);
    upsertMeta('og:image', img, true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', desc);
    upsertMeta('twitter:image', img);
    upsertCanonical(url);

    upsertJsonLd('jsonld-route', jsonLd);

    if (breadcrumb && breadcrumb.length > 0) {
      const bcLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE}${b.path}`,
        })),
      };
      upsertJsonLd('jsonld-breadcrumb', bcLd);
    } else {
      upsertJsonLd('jsonld-breadcrumb', null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullTitle, desc, url, img, type, jsonLdKey, breadcrumbKey]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  jsonLd: PropTypes.object,
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default SEO;
