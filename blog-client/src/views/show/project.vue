<template>
  <a-timeline>
    <a-card title="项目">
      <a-timeline-item
        :color="randomColor()"
        v-for="item in recordConfig"
        :key="item.id"
      >
        <a-button @click="item.handle">
          {{ item.content }}
        </a-button>
      </a-timeline-item>
    </a-card>
  </a-timeline>
</template>

<script>
import { randomColor } from '@use/randomColor';
import { recordConfig } from '@view-provider/show/project.js';
export default {
  props: {
    recordConfig: Array,
    default: () => [],
  },
  setup(props) {
    return {
      randomColor,
      recordConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>