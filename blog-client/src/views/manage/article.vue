<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" rowKey="id"
             :pagination="pagination" @change="handleChangePage"
    >
      <template v-slot:edit="{text}">
        <a-button>编辑</a-button>
        <a-button>删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
import {articleViewConfig} from '@view-provider/manage/article.js';
import {useLinkedRouteParam, useRouteParamChange} from "@use/routerManage";

export default {

  setup() {
    const {pagination, dataSource, columns} = articleViewConfig;
    const pageNumParamChange = useRouteParamChange('currentPage')
    const handleChangePage = ({current}) => pageNumParamChange(current);
    const {currentPage} = useLinkedRouteParam('currentPage');
    pagination.current = currentPage;
    return {
      pagination, dataSource, columns,
      handleChangePage
    };
  },
}
</script>

<style scoped>

</style>