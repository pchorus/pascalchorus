import { siteName } from '../gridsome.config';

export function getMetaInfo(title, description) {
  return {
    title,
    meta: [
      {
        key: 'title',
        name: 'title',
        content: `${title} － ${siteName}`,
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: `${title} － ${siteName}`,
      },
      {
        key: 'description',
        name: 'description',
        content: description,
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: description,
      },
    ],
  };
}
