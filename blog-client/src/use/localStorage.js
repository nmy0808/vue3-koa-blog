import { ref, watchEffect } from 'vue';
export const useLocalStorage = (key) => {
  const storageRef = ref(window.localStorage.getItem(key) || '');
  const stop = watchEffect(() => {
    window.localStorage.setItem(key, storageRef.value);
  });
  return {
    storage: storageRef,
    stop,
  };
};
