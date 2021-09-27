import { ref, watchEffect, computed } from 'vue';
import router from '../router/index.js';
import { useRoute, useRouter } from 'vue-router';
export const useRouterNameToPage = (pageName, otherOption = {}) => {
  router.push({ name: pageName, ...otherOption });
};
export const useRouterPathToPage = (path, otherOption = {}) => {
  router.push({ path: path, ...otherOption });
};
// 获取当前路由白名单
export const useCurrentRouterToNameWhiteStatus = (whiteArr = []) => {
  const route = useRoute();
  const status = computed(() => whiteArr.includes(route.name));
  return { status };
};
// 改变route.params
export const useRouteParamChange = (paramName) => (value) =>
  router.push({ params: { [paramName]: value } });

// 监听route.param[属性], 并返回这个[属性]的ref
export const useLinkedRouteParam = (paramName, isNum = true) => {
  const route = useRoute();
  const paramRef = ref('');
  watchEffect(() => {
    const param = route.params[paramName];
    paramRef.value = isNum ? Number(param) : param;
  });
  return {
    [paramName]: paramRef,
  };
};
