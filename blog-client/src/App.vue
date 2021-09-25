<template>
  <a-config-provider :locale="locale">
    <b-header :config="appViewConfig" :isScroll="isScroll" />
    <router-view />
      <a-back-top />
  </a-config-provider>
</template>
<script>
import { ConfigProvider , backTop } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { appViewConfig } from '@view-provider/app.js';
import { useScrollStatus } from '@use/scrollEvent';
import BHeader from '@blocks/header.vue';
export default {
  components: { BHeader, AConfigProvider: ConfigProvider, ABackTop: backTop },
  setup() {
    const { isScroll } = useScrollStatus();
    return {
      isScroll,
      appViewConfig,
      locale: zhCN,
    };
  },
};
</script>
<style lang="scss">
@import url('./style.css');
</style>
