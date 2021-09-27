import { useRouterNameToPage } from '@use/routerManage.js';

export const appViewConfig = {
  avatar: {
    src: require('@assets/img/avatar.jpeg'),
    shape: 'square',
    size: 'large',
  },
  tags: [
    {
      text: 'vuejs',
      color: 'green',
    },
    {
      text: 'eggjs',
      color: 'blue',
    },
    {
      text: 'typescript',
      color: 'cyan',
    },
  ],
  menus: [
    {
      text: '主页',
      type: 'default',
      handle: () => useRouterNameToPage('Show'),
    },
    {
      text: '归档',
      type: 'default',
      handle: () => useRouterNameToPage('ShowFile'),
    },
    {
      text: '赞助列表',
      type: 'default',
      handle: () => useRouterNameToPage('ShowSponsor'),
    },
    {
      text: '关于我',
      type: 'primary',
      handle: () => useRouterNameToPage('ShowAbout'),
    },
  ],
};
