<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="heading heading--l heading--l-paragraph" id="modalTitle">
          <slot name="header" />
        </header>
        <section id="modalDescription" class="u-margin-bottom-l">
          <slot name="body" />
        </section>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
};
</script>

<style lang="scss" scoped>
@use 'sass:math';
@import '../assets/variables.scss';

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: flex;
  flex-direction: column;
  max-width: math.div($max-content-width, 2);
  overflow-x: auto;
  background: $background-color-default;
  box-shadow: 2px 2px 20px 1px;
  padding: $space-l;
  border-radius: $border-radius-default;
}
</style>
