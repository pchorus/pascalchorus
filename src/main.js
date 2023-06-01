// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles.scss';
import DefaultLayout from '~/layouts/Default.vue';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import { siteName, siteUrl } from '../gridsome.config';

export default function (Vue, { router, head, isClient }) {
  const addMetaTag = (name, content) => head.meta.push({ key: name, name, content });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: 'https://fc28b1e5128740dbb3d5610e62c618c7@o222451.ingest.sentry.io/5316739',
      integrations: [new VueIntegration({ Vue, attachProps: true })],
    });
  }

  head.htmlAttrs = { lang: 'de' };

  addMetaTag('application-name', siteName);
  addMetaTag('apple-mobile-web-app-title', siteName);
  addMetaTag('og:type', 'website');
  addMetaTag('og:title', siteName);
  addMetaTag('og:url', siteUrl);
  addMetaTag('og:image', `${siteUrl}/macbook.jpg`);
  addMetaTag('og:locale', 'de_DE');
  addMetaTag('twitter:card', 'summary');
}
