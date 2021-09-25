import { onUnmounted } from 'vue';
export const useWindowEvent = (eventType, callback) => {
  // 注册
  window.addEventListener(eventType, callback);
  // 销毁
  onUnmounted(() => {
    window.removeEventListener(eventType, callback);
  });
};
