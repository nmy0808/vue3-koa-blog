import { useRouterNameToPage } from '@use/routerManage.js';

import {
  BookOutlined,
  ReadOutlined,
  ScheduleOutlined,
  DeliveredProcedureOutlined,
  LikeOutlined,
} from '@ant-design/icons-vue';
export const showIndexViewConfig = {
  avatar: {
    src: require('@assets/img/avatar.jpeg'),
  },
  title: 'MingYan',
  subTitle: '展示自己',
  unwantedBackWhiteList: ['ShowBlog'], // 不显示按钮
  buttonGroup: [
    {
      text: '日志',
      icon: <BookOutlined />,
      handle: () => useRouterNameToPage('ShowBlog'),
    },
    {
      text: '读书',
      icon: <ReadOutlined />,
      handle: () => useRouterNameToPage('ShowBook'),
    },
    {
      text: '项目',
      icon: <ScheduleOutlined />,
      handle: () => useRouterNameToPage('ShowProject'),
    },
    {
      text: '归档',
      icon: <DeliveredProcedureOutlined />,
      handle: () => useRouterNameToPage('ShowFile'),
    },
    {
      text: '赞助列表',
      icon: <LikeOutlined />,
      handle: () => useRouterNameToPage('ShowSponsor'),
    },
  ],
};
