<template>
  <div>
    <BCardList :cardList="bookConfig" />
    <CPagination @change="handleChangePage"/>
  </div>
</template>

<script>
import BCardList from '@blocks/cardList.vue';
import { bookConfig } from '@view-provider/show/book.js';
import CPagination from '@com/pagination.vue';
export default {
  components: { BCardList, CPagination },
  setup() {
    const handleChangePage = (currentPage)=>{
      console.log(currentPage);
    }
    return {
      bookConfig,
      handleChangePage
    };
  },
};
</script>

<style lang="scss" scoped>
</style>