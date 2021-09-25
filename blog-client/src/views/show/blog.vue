<template>
  <div>
    <BCardList :cardList="cardConfig" />
  </div>
</template>

<script>
import BCardList from '@blocks/cardList.vue';
import { cardConfig } from '@view-provider/show/blog.js';
export default {
  components: { BCardList },
  setup(props) {
    return {
      cardConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>