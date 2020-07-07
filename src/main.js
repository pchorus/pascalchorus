// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles.scss';
import DefaultLayout from '~/layouts/Default.vue';
import VueGtag from 'vue-gtag';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueGtag, {
    config: { id: 'UA-171868834-1', params: { anonymize_ip: true } },
    bootstrap: false,
  });

  head.meta.push({
    name: 'robots',
    content: 'noindex',
  });
}
