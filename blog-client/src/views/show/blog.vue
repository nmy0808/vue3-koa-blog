<template>
  <div>
    <BCardList :cardList="cardConfig" />
    <CPagination @change="handleChangePage"/>
  </div>
</template>

<script>
import BCardList from '@blocks/cardList.vue';
import { cardConfig } from '@view-provider/show/blog.js';
import CPagination from '@com/pagination.vue';
export default {
  components: { BCardList, CPagination },
  setup() {
    const handleChangePage = (currentPage)=>{
      console.log(currentPage);
    }
    return {
      cardConfig,
      handleChangePage
    };
  },
};
</script>

<style lang="scss" scoped>
</style>