<template>
  <div>
    <div id="editor"></div>
    <a-button @click="showModal">发布</a-button>
    <a-button @click="handleReset">重置</a-button>
    <BModal ref="modal" />
  </div>
</template>

<script>
import { createEditor } from '@use/useEditor.js';
import { useSuccessNotice } from '@use/notice.js';
import { debounce } from '@use/common.js';
import { useLocalStorage } from '@use/localStorage.js';
import { onMounted, ref } from 'vue';
import BModal from '@blocks/modal.vue';
import xss from 'xss';
export default {
  components: { BModal },
  setup() {
    const editor = createEditor('#editor');
    const { storage } = useLocalStorage('draft');

    onMounted(() => {
      editor.txt.html(storage.value);
    });
    editor.config.onchange = debounce(
      (newHtml) => {
        storage.value = xss(newHtml);
        useSuccessNotice({ message: '已缓存至本地' });
      },
      2000,
      true,
    );
    const modal = ref(null);
    const showModal = () => {
      modal.value.showModal(true);
    };
    const handleReset = ()=>{
      editor.txt.html('');
      storage.value = '';
    }
    return {
      modal,
      showModal,
      handleReset
    };
  },
};
</script>

<style scoped lang="scss">
</style>