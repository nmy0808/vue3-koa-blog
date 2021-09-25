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
    redirect: { name: 'ShowBlog' },
    children: [
      {
        path: 'blog',
        name: 'ShowBlog',
        component: showBlog,
      },
      {
        path: 'book',
        name: 'ShowBook',
        component: () => import('@views/show/book.vue'),
      },
    ],
  },
];
