<template>
  <div class="card">
    <img class="card__icon" v-if="icon" :src="icon.path" :alt="icon.altText" />
    <div class="card__text">
      <h2 class="heading heading--l heading--l-paragraph" v-html="title"></h2>
      <p class="u-font-m">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'text'],
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';
.card {
  background-color: #ffffff;
  padding: $space-m;

  &__icon {
    display: block;
    margin: 0 auto $space-l auto;
    width: $size-xxl;
  }
}

@media (min-width: $max-width-mobile) and (max-width: $max-width-tablet) {
  .card {
    display: flex;
    align-items: center;

    &__icon {
      margin: auto $space-l auto auto;
    }

    &__text {
      flex: 1 1 auto;
    }
  }
}
</style>
