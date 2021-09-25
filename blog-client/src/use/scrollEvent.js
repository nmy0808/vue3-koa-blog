import { ref } from 'vue';
const { useWindowEvent } = require('./event');

export const useScrollStatus = () => {
  let isScroll = ref(false);
  useWindowEvent('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      isScroll.value = true;
    } else {
      isScroll.value = false;
    }
  });
  return {
    isScroll,
  };
};
