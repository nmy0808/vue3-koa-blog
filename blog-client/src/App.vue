<template>
  <b-header :config="appViewConfig" :isScroll="isScroll" />
  <router-view />
</template>
<script>
import { appViewConfig } from '@view-provider/app.js';
import { useScrollStatus } from '@use/scrollEvent';
import BHeader from '@blocks/header.vue';
export default {
  components: { BHeader },
  setup() {
    const { isScroll } = useScrollStatus();
    return {
      isScroll,
      appViewConfig,
    };
  },
};
</script>
<style lang="scss">
@import url('./style.css');
</style>
