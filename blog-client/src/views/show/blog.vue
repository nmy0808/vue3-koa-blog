<template>
  <div>
    <BCardList :cardList="cardConfig" />
    <CPagination />
  </div>
</template>

<script>
import BCardList from '@blocks/cardList.vue';
import { cardConfig } from '@view-provider/show/blog.js';
import CPagination from '@com/pagination.vue';
export default {
  components: { BCardList, CPagination },
  setup(props) {
    return {
      cardConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>