<template>
  <Layout>
    <div class="u-max-page-width">
      <h1 class="heading heading--xxl heading--xxl-paragraph u-margin-top-l">Vielen Dank!</h1>

      <p class="u-font-m">Ihre Nachricht wurde gesendet.</p>
      <p class="u-font-m u-font-m--paragraph">Ich werde mich schnellstmöglich bei Ihnen melden.</p>

      <g-link to="/">Zurück zur Startseite</g-link>
    </div>
  </Layout>
</template>

<script>
import { getMetaInfo } from '../utils';

export default {
  metaInfo: getMetaInfo('Nachricht gesendet', 'Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank!'),
};
</script>
