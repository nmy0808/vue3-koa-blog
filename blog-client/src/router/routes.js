import showIndex from '@views/show/index.vue';
import showBlog from '@views/show/blog.vue';

/**
 * 路由映射
 * @type {import("vue-router").RouteRecordRaw[]}.
 * */
export const routes = [
  {
    path: '/',
    redirect: '/show',
  },
  {
    path: '/show',
    name: 'Show',
    component: showIndex,
    redirect: { name: 'ShowBlog' , params: {currentPage: 1}},
    children: [
      {
        path: 'blog/:currentPage',
        name: 'ShowBlog',
        component: showBlog,
      },
      {
        path: 'book/:currentPage',
        name: 'ShowBook',
        component: () => import('@views/show/book.vue'),
      },
      {
        path: 'file',
        name: 'ShowProject',
        component: () => import('@views/show/project.vue'),
      },
      {
        path: 'book',
        name: 'ShowFile',
        component: () => import('@views/show/file.vue'),
      },
      {
        path: 'book',
        name: 'ShowSponsor',
        component: () => import('@views/show/sponsor.vue'),
      },
    ],
  },
];
