import {reactive} from "vue"

export const articleViewConfig = {
  pagination: reactive({
    pageSize: 5
  }),
  columns: [
    {
      title: "标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: "修改时间",
      dataIndex: "updatedAt",
      key: "updatedAt"
    },
    {
      title: "类型",
      key: "type",
      dataIndex: "type",
      slots: {customRender: "type"}
    },
    {
      title: "编辑",
      key: "edit",
      slots: {customRender: "edit"}
    }
  ],
  dataSource: [
    {
      id: 1,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 2,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 3,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 4,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 5,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 6,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 7,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 8,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 9,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 10,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 11,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 12,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 13,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 14,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 15,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 16,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 178,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 18,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 19,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 20,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 21,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 22,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 23,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },
    {
      id: 24,
      title: '标题',
      createdAt: '2021-12-12',
      updatedAt: '2021-12-12',
      type: '类型',
    },


  ]
}
