<template>
  <div id="editor"></div>
</template>

<script>
import { createEditor } from '@use/useEditor.js';
import { useSuccessNotice } from '@use/notice.js';
import { debounce } from '@use/common.js';
import { useLocalStorage } from '@use/localStorage.js';
import { onMounted } from 'vue';
import xss from 'xss';
export default {
  setup() {
    const editor = createEditor('#editor');
    const { storage } = useLocalStorage('draft');

    onMounted(() => {
      editor.txt.html(storage.value);
    });
    editor.config.onchange = debounce(
      (newHtml) => {
        storage.value = xss(newHtml);
        useSuccessNotice({ message: '保存至草稿箱' });
      },
      2000,
      true,
    );
  },
};
</script>

<style scoped lang="scss">
</style>