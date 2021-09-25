import { ref, watch, computed } from 'vue';
import router from '../router/index.js';
import { useRoute } from 'vue-router';
export const useRouterNameToPage = (pageName) => {
  router.push({ name: pageName });
};
// 获取当前路由白名单
export const useCurrentRouterToNameWhiteStatus = (whiteArr = []) => {
  const route = useRoute();
  const status = computed(() => whiteArr.includes(route.name));
  return { status };
};
