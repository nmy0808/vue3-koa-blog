<template>
  <div class="view-header">
    <a-page-header class="view-header-top">
      <template #title>
        <a-avatar
          :src="avatar.src"
          :shape="avatar.shape || 'square'"
          :size="avatar.size || 'large'"
        ></a-avatar>
        {{ title }}
      </template>
      <template #subTitle> {{ subTitle }} </template>
      <template #extra>
        <a-button
          type="primary"
          v-if="isShowBackBtn"
          @click="$router.push({ name: 'Show' })"
          >{{ extraTitle }}</a-button
        >
      </template>
    </a-page-header>
    <buttonGroup :config="buttonGroup" class="buttonGroup" />
  </div>
</template>

<script>
import { computed, isRef, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { buttonGroup } from '@use/showIndexButtonGroup.jsx';
import { useCurrentRouterToNameWhiteStatus } from '@use/routerManage.js';
export default {
  components: { buttonGroup },
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      avatar = {},
      title = '',
      subTitle = '',
      buttonGroup = [],
      unwantedBackWhiteList = [],
    } = props.config;
    const extraTitle = '返回首页';
    const isShowBackBtn = computed(
      () =>
        !useCurrentRouterToNameWhiteStatus(unwantedBackWhiteList).status.value,
    );
    return {
      isShowBackBtn,
      avatar,
      title,
      subTitle,
      buttonGroup,
      extraTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
.view-header {
  margin-top: 10px;
}
.view-header-top {
  width: 50vw;
  margin: 0 auto;
}
.buttonGroup {
  display: flex;
  justify-content: center;
}
</style>