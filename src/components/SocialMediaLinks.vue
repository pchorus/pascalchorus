<template>
  <div class="social-media">
    <a href="https://www.xing.com/profile/Pascal_Chorus/cv" target="_blank" rel="noopener"
      ><img class="social-media__icon" :src="'../social/xing.png'" alt="Xing"
    /></a>
    <a href="https://www.linkedin.com/in/pascal-chorus-6303071a2" target="_blank" rel="noopener"
      ><img class="social-media__icon" :src="'../social/linkedin.svg'" alt="LinkedIn"
    /></a>
    <a href="https://x.com/pascalchorus" target="_blank" rel="noopener"
      ><img class="social-media__icon" :src="'../social/x.svg'" alt="X"
    /></a>
    <a href="https://github.com/pchorus" target="_blank" rel="noopener"
      ><img class="social-media__icon" :src="'../social/github.png'" alt="GitHub"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables';
.social-media {
  display: flex;
  align-items: center;

  &__icon {
    display: block;
    height: $size-m;
    margin: 0 $space-xs;
  }
}
</style>
