<template>
  <a-pagination
    class="pagination"
    show-quick-jumper
    v-model:current="current"
    :pageSize="pageSize"
    :total="total"
    show-less-items
    @change="handleChangeCurrentPage"
  />
</template>

<script>
import { reactive, watchEffect, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { backTop } from '@use/scrollTop.js';
import { useRouteParamChange, useLinkedRouteParam } from '@use/routerManage.js';
export default {
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 8,
    },
  },
  setup(props, { emit }) {
    const { currentPage: current } = useLinkedRouteParam('currentPage');
    watchEffect(() => {
      backTop();
      emit('change', current.value);
    });
    const handleChangeCurrentPage = useRouteParamChange('currentPage');
    return {
      current,
      handleChangeCurrentPage,
    };
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
  padding-bottom: 80px;
}
</style>