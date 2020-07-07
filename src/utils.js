import { bootstrap } from 'vue-gtag';

export const STATISTICS_COOKIES_COOKIE_NAME = 'statistics_cookies';

export function bootstrapGtag() {
  const localStorageItem = localStorage.getItem(STATISTICS_COOKIES_COOKIE_NAME);

  if (
    localStorageItem &&
    JSON.parse(localStorageItem).isStatisticsCookiesAllowed &&
    process.env.NODE_ENV === 'production'
  ) {
    bootstrap();
  }
}
