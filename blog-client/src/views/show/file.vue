<template>
    <a-card title="2020">

  <a-timeline>
      <a-timeline-item
        :color="randomColor()"
        v-for="item in fileConfig"
        :key="item.id"
      >
        {{ item.date }} ---
        <a-button @click="item.handle">
          {{ item.content }}
        </a-button>
      </a-timeline-item>
  </a-timeline>
    </a-card>

</template>

<script>
import { randomColor } from '@use/randomColor';
import { fileConfig } from '@view-provider/show/file.js';
export default {
  props: {
    recordConfig: Array,
    default: () => [],
  },
  setup(props) {
    return {
      randomColor,
      fileConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>