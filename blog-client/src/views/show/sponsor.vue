<template>
  <a-card title="2020">
    <a-timeline mode="alternate">
      <a-timeline-item
        :color="randomColor()"
        v-for="item in sponsorConfig"
        :key="item.id"
      >
        {{ item.name }} - {{ item.date }}
      </a-timeline-item>
    </a-timeline>
  </a-card>
</template>

<script>
import { randomColor } from '@use/randomColor';
import { sponsorConfig } from '@view-provider/show/sponsor.js';
export default {
  props: {
    recordConfig: Array,
    default: () => [],
  },
  setup(props) {
    return {
      randomColor,
      sponsorConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>