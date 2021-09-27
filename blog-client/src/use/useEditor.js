import { onMounted } from 'vue';
import E from 'wangeditor';
export const createEditor = (id, config) => {
  const editor = new E(id);
  editor.config.zIndex = 0;
  editor.config.height = 600;

  onMounted(() => {
    editor.create();
  });
  return editor;
};
