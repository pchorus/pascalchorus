// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles.scss';
import DefaultLayout from '~/layouts/Default.vue';
import VueGtag from 'vue-gtag';
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueGtag, {
    config: { id: 'UA-171868834-1', params: { anonymize_ip: true } },
    bootstrap: false,
  });

  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: 'https://fc28b1e5128740dbb3d5610e62c618c7@o222451.ingest.sentry.io/5316739',
      integrations: [new VueIntegration({ Vue, attachProps: true })],
    });
  }

  head.meta.push({
    name: 'robots',
    content: 'noindex',
  });
}
