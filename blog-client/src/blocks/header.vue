<template>
  <a-page-header class="b-header">
    <template #title>
      <a-avatar
        :src="avatar.src"
        :shape="avatar.shape || 'square'"
        :size="avatar.size || 'large'"
      />
    </template>
    <template #tags>
      <a-tag v-for="tag in tags" :key="tag.text" :color="tag.color">
        {{ tag.text }}
      </a-tag>
    </template>
    <template #extra>
      <a-button
        v-for="menu in menus"
        :key="menu.text"
        :type="menu.type"
        @click="menu.handle"
      >
        {{ menu.text }}
      </a-button>
    </template>
  </a-page-header>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      ...props.config,
    };
  },
};
</script>

<style lang="scss" scoped>
.b-header {
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}

.b-header[isScroll='true'] {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}
</style>