<template>
  <modal>
    <template v-slot:header>Datenschutzeinstellungen</template>
    <template v-slot:body>
      <p class="u-font-m u-font-m--paragraph">
        Ich nutze Cookies auf meiner Website. Einige von ihnen sind notwendig, weitere hilfreiche Cookies sorgen dafür,
        diese Website und Ihre Nutzererfahrung zu verbessern.
      </p>
      <ul>
        <li>
          <input id="notwendig" type="checkbox" checked disabled />
          <label for="notwendig">Notwendig</label>
        </li>
        <li>
          <input id="statistiken" type="checkbox" v-model="statistics" />
          <label for="statistiken">Statistiken</label>
        </li>
      </ul>
    </template>
    <template v-slot:footer class="footer">
      <div class="button-group">
        <button type="button" class="button button--secondary" @click="onAcceptClick(statistics)" aria-label="OK">
          Auswahl akzeptieren
        </button>
        <button type="button" class="button button--primary" @click="onAcceptClick(true)" aria-label="OK">
          Alle akzeptieren
        </button>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from './Modal';

export default {
  components: { Modal },
  data: function () {
    return {
      statistics: false,
    };
  },
  methods: {
    onAcceptClick(isStatisticsCookiesAllowed) {
      this.$emit('close', isStatisticsCookiesAllowed);
    },
  },
};
</script>
