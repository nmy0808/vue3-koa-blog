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
      handle: () => {
        console.log(21);
      },
    },
    {
      text: '归档',
      type: 'default',
    },
    {
      text: '赞助列表',
      type: 'default',
    },
    {
      text: '关于我',
      type: 'primary',
    },
  ],
};
