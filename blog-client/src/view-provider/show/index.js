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
  buttonGroup: [
    {
      text: '日志',
      icon: <BookOutlined />,
      handle: () => console.log('ha'),
    },
    {
      text: '读书',
      icon: <ReadOutlined />,
      handle: () => console.log('ha'),
    },
    {
      text: '项目',
      icon: <ScheduleOutlined />,
      handle: () => console.log('ha'),
    },
    {
      text: '归档',
      icon: <DeliveredProcedureOutlined />,
      handle: () => console.log('ha'),
    },
    {
      text: '赞助列表',
      icon: <LikeOutlined />,
      handle: () => console.log('ha'),
    },
  ],
};
