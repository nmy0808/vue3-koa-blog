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
    </a-page-header>
    <buttonGroup :config="buttonGroup" class="buttonGroup"/>
  </div>
</template>

<script>
import { buttonGroup } from '@use/showIndexButtonGroup.jsx';
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
      buttonGroup =[]
    } = props.config;
    return {
      avatar,
      title,
      subTitle,
      buttonGroup
    };
  },
};
</script>

<style lang="scss" scoped>
.view-header{
  margin-top: 10px;
}
.view-header-top{
  width: 50vw;
  margin: 0 auto;
}
.buttonGroup{
  display: flex;
  justify-content: center;
}
</style>