<template>
  <div>
    <a-modal v-model:visible="visible" title="发布管理" @ok="handleOk">
      <a-form layout="vertical" :model="formRecord">
        <a-form-item>
          <a-input v-model:value="formRecord.title" placeholder="标题">
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formRecord.synopsis" placeholder="简介">
          </a-input>
        </a-form-item>
        <a-form-item>
          类型:
          <a-radio-group name="radioGroup" v-model:value="formRecord.type">
            <a-radio value="blog">日志</a-radio>
            <a-radio value="book">读书</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { reactive, ref, toRaw } from 'vue';
import { Modal } from 'ant-design-vue';
import { useSuccessNotice } from '@use/notice.js';
export default {
  components: { AModal: Modal },
  setup() {
    const formRecord = reactive({
      title: '',
      synopsis: '',
      type: 'blog',
    });
    const visible = ref(false);
    const showModal = (isShow) => (visible.value = isShow);
    const handleOk = () => {
      console.log(toRaw(formRecord));
      showModal(false);
      useSuccessNotice({ message: '发布成功', duration: 2 });
    };
    return {
      formRecord,
      visible,
      showModal,
      handleOk,
    };
  },
};
</script>

<style scoped>
</style>