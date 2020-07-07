<template>
  <div>
    <img class="img" :src="image.path" :alt="image.altText" />
    <p class="title u-font-m">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ['image', 'title'],
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';
.img {
  display: block;
  margin: 0 auto $space-s auto;
  height: $size-xxl;
  max-width: 132px;
}

.title {
  text-align: center;
}
</style>
