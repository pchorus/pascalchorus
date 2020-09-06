<template>
  <Layout>
    <div class="text-block u-max-page-width">
      <h1>Impressum</h1>

      <p>Angaben gemäß § 5 TMG</p>

      <h2>Betreiber der Webseite</h2>
      <p>
        Pascal Chorus<br />
        Auf'm Schif 6a<br />
        52134 Herzogenrath<br />
        Telefon: 02407 5569408<br />
        Email: <a href="mailto:hey@pascalchorus.de">hey@pascalchorus.de</a>
      </p>

      <h2>Vertretungs&shy;berechtigt</h2>
      <p>Pascal Chorus</p>

      <h2>Registergericht&shy;eintrag</h2>
      <p>Nicht eingetragen</p>
    </div>
  </Layout>
</template>

<script>
import { getMetaInfo } from '../utils';

export default {
  metaInfo: getMetaInfo('Impressum', 'Hier finden Sie das Impressum zu Pascal Chorus Webentwicklung.'),
};
</script>
