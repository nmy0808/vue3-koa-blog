<template>
  <div>
    <BCardList :cardList="cardConfig" />
    <a-pagination
      class="pagination"
      show-quick-jumper
      v-model:current="pagination.current"
      :pageSize="pagination.pageSize"
      :total="pagination.total"
      show-less-items
      @change="handleChangeCurrentPage"
    />
  </div>
</template>

<script>
import BCardList from '@blocks/cardList.vue';
import { cardConfig } from '@view-provider/show/blog.js';
import { reactive, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { backTop } from '@use/scrollTop.js';
export default {
  components: { BCardList },
  setup(props) {
    const pagination = reactive({
      current: 1,
      total: 500,
      pageSize: 8,
    });
    const router = useRouter();
    const route = useRoute();
    watchEffect(() => {
      const { currentPage } = route.params;
      pagination.current = Number(currentPage);
      backTop();
    });
    const handleChangeCurrentPage = (currentPage) => {
      router.push({ params: { currentPage } });
      backTop();
    };

    return {
      cardConfig,
      pagination,
      handleChangeCurrentPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  padding-bottom: 80px;
}
</style>