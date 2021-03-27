<template>
  <Layout>
    <div class="heading-container">
      <g-image class="heading-image" src="@/../static/macbook.jpg"></g-image>
      <h1 class="heading heading--xxl heading--color-white">Professionelle Software- und Web-Entwicklung</h1>
    </div>

    <section class="applications">
      <div class="application-cards u-max-page-width">
        <card
          class="application-cards__item"
          v-for="card in cards"
          :icon="card.icon"
          :title="card.title"
          :text="card.text"
          :key="card.title"
        ></card>
      </div>
    </section>

    <section class="profile u-max-page-width">
      <div class="profile__text">
        <h2 class="heading heading--xl u-margin-bottom-m">Software-Entwicklung mit Weitblick</h2>
        <p class="u-margin-bottom-m">
          Mein Name ist Pascal Chorus und ich bin Software- und Web-Entwickler in Aachen. Zur Zeit arbeite ich als Team
          Lead Frontend bei der moneymeets GmbH in Köln.
        </p>
        <p class="u-margin-bottom-m">
          Neben meiner hauptberuflichen Tätigkeit betreue ich Software-Projekte verschiedenster Art: von der privaten
          Webseite bis hin zur komplexen Desktop- oder Web-Applikation.
        </p>
        <p class="u-margin-bottom-m">
          Sie suchen für Ihr Projekt professionelle Unterstützung? Nehmen Sie gerne Kontakt zu mir auf, sodass ich Ihnen
          kostenlos ein unverbindliches Angebot unterbreiten kann.
        </p>
        <g-link class="button button--primary" to="/kontakt/">kostenlose Anfrage</g-link>
      </div>
      <g-image class="profile__avatar" alt="Profilbild von Pascal Chorus" src="@/assets/profil.jpg" />
    </section>
  </Layout>
</template>

<script>
import Card from '../components/Card';
import { getMetaInfo } from '../utils';
export default {
  components: { Card },
  metaInfo: getMetaInfo(
    'Software- und Web-Entwicklung',
    'Professionelle Software- und Web-Entwicklung: private Webseiten, Internetauftritte für kleine und mittelständische Unternehmen, Individuelle Webanwendungen (Single Page Applications) und Desktopanwendungen.'
  ),
  data: function () {
    return {
      cards: [
        {
          icon: {
            path: '../web.png',
            altText: 'Webseiten',
          },
          title: 'Individuelle Webseiten',
          text:
            'Private Webseiten, Internetauftritte für kleine und mittelständische Unternehmen und Content Management Systeme (CMS).',
        },
        {
          icon: {
            path: '../web-app.png',
            altText: 'Webanwendungen',
          },
          title: 'Web&shy;anwendungen',
          text: 'Individuelle Webanwendungen (Single Page Applications), z.B. Web-Shops oder Dokumentenverwaltung.',
        },
        {
          icon: {
            path: '../app-page.png',
            altText: 'Desktopanwendung',
          },
          title: 'Desktop&shy;anwendungen',
          text: 'Desktopanwendungen, optimiert für den Einsatz unter Windows, macOS und Linux.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.heading-container {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: $space-xl;
  max-width: $max-hero-image-width;
  margin: 0 auto;
  height: 640px;
  box-sizing: border-box;

  > * {
    width: 40%;
    text-shadow: 0 0 10px $black;
  }
}

.heading-image {
  position: absolute;
  object-fit: cover;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.applications {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
  background-color: $background-color-gray;
}

.application-cards {
  display: flex;
  align-items: stretch;

  &__item {
    flex: 1 1 10px;
    box-shadow: 0 0 50px -22px $shadow-default-color;
    border-radius: $border-radius-default;

    &:not(:last-child) {
      margin-right: $space-xl;
    }
  }
}

.profile {
  display: flex;
  align-items: center;
  padding: $space-xl $space-m;

  &__text {
    flex: 1 1 10px;
    margin-right: $space-xxl;
  }

  &__avatar {
    width: 240px;
    height: 240px;
    border-radius: 120px;
  }
}

@media (max-width: $max-width-mobile) {
  .heading-container {
    padding: $space-l;
    height: 380px;

    > .heading {
      width: auto;
    }
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .profile {
    flex-direction: column;

    &__text {
      margin-right: 0;
      margin-bottom: $space-l;
    }
  }
}

@media (max-width: $max-width-tablet) {
  .heading-container {
    height: 420px;
  }

  .application-cards {
    flex-direction: column;

    &__item {
      flex: 1 1 auto;
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: $space-l;
      }
    }
  }
}
</style>
