<template>
  <div class="layout">
    <div class="header-container">
      <header class="header u-max-page-width">
        <g-link class="header__link" to="/">Pascal Chorus</g-link>
        <nav class="nav" :class="{ 'nav--visible': this.isMobileMenuVisible }">
          <g-link
            v-for="navItem in navItems"
            class="nav__link"
            active-class="nav__link--active"
            :to="navItem.to"
            :key="navItem.to"
            >{{ navItem.name }}</g-link
          >
        </nav>
        <button class="menu-button" type="button" @click="onMenuButtonClick">
          <img class="menu-button__icon" :src="isMobileMenuVisible ? '../close.png' : '../menu.png'" alt="Menü" />
        </button>
      </header>
    </div>

    <div>
      <nav class="nav" :class="{ 'nav--visible': this.isMobileMenuVisible }"></nav>
    </div>
    <main class="main">
      <slot />
    </main>
    <div class="footer-container">
      <footer class="footer u-max-page-width">
        <social-media-links class="footer__social" />
        <div class="footer__links">
          <g-link v-for="footerLink in footerLinks" class="footer__link" :to="footerLink.to" :key="footerLink.to">{{
            footerLink.name
          }}</g-link>
        </div>
      </footer>
    </div>
    <cookie-policy-modal v-if="isModalVisible" @close="onCookiePolicyModalClose"></cookie-policy-modal>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import CookiePolicyModal from '../components/CookiePolicyModal';
import SocialMediaLinks from '../components/SocialMediaLinks';
import { bootstrapGtag, STATISTICS_COOKIES_COOKIE_NAME } from '../utils';

export default {
  components: { CookiePolicyModal, SocialMediaLinks },
  data: function () {
    return {
      isModalVisible: false,
      isMobileMenuVisible: false,
      navItems: [
        {
          name: 'Leistungen',
          to: '/leistungen/',
        },
        {
          name: 'Über mich',
          to: '/ueber-mich/',
        },
        {
          name: 'Kontakt',
          to: '/kontakt/',
        },
      ],
      footerLinks: [
        {
          name: 'Impressum',
          to: '/impressum/',
        },
        {
          name: 'Datenschutz',
          to: '/datenschutz/',
        },
      ],
    };
  },
  mounted: function () {
    const localStorageItem = localStorage.getItem(STATISTICS_COOKIES_COOKIE_NAME);

    if (localStorageItem) {
      bootstrapGtag();
    } else {
      this.isModalVisible = true;
    }
  },
  methods: {
    onMenuButtonClick: function () {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    onCookiePolicyModalClose(isStatisticsCookiesAllowed) {
      this.isModalVisible = false;
      localStorage.setItem(STATISTICS_COOKIES_COOKIE_NAME, JSON.stringify({ isStatisticsCookiesAllowed }));
      bootstrapGtag();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-container {
  background-color: $primary-color;
}

.header {
  width: 100%;
  max-width: $max-content-width;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    font-size: $font-size-xl;
    color: $font-color-white;
    font-weight: lighter;
    text-transform: uppercase;
    display: block;
    margin: $space-s 0;
  }
}

.nav {
  display: flex;

  &__link {
    display: block;
    padding: $space-xs 0 $space-xs - $tabs-border-bottom-width 0;
    margin: 0 $space-s;

    color: $font-color-white;
    border-bottom: $tabs-border-bottom-width solid transparent;

    &:hover {
      color: $font-color-white-light;
      border-color: $tabs-border-bottom-color-hover;
    }

    &:active {
      color: $font-color-white-dark;
    }

    &--active {
      color: $font-color-white;
      border-color: $tabs-border-bottom-color-selected;
    }
  }
}

.menu-button {
  display: none;
  font-size: $size-m;
  position: absolute;
  top: $size-s;
  right: $size-s;
  height: $size-l;
  width: $size-l;

  &__icon {
    height: $size-l;
    width: $size-l;
  }
}

.main {
  // IE 11 needs all three attributes
  flex: 1 0 auto;
}

.footer-container {
  background-color: $primary-color-dark;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  &__social {
    padding: $space-s;
  }

  &__links {
    display: flex;
  }

  &__link {
    display: block;
    padding: $space-s;
    color: $font-color-white;

    &:hover {
      color: $font-color-white-light;
      border-color: $tabs-border-bottom-color-hover;
    }

    &:active {
      color: $font-color-white-dark;
    }
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .menu-button {
    display: block;
  }

  .header {
    display: block;

    &__link {
      font-size: $font-size-l;
    }
  }

  .nav {
    display: none;

    &--visible {
      display: block;
    }

    &__link {
      padding: $space-s 0;
      border-bottom: none;
    }
  }
}
</style>
