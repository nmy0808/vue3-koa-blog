import router from '@/router';
import {componentsPlugin} from './components';
/**
 * 插件集
 * @type {import("vue").Plugin[]}
 * */
const plugins = [router,...componentsPlugin];
/**
 * 批量注册插件
 * @param {import("vue").app} app
 * */
export const usePlugins = (app) => {
  plugins.forEach(app.use, app);
};
