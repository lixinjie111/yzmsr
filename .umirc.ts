import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '元知智能研究院',
  metas: [
    {
      name: 'keywords',
      content: '元知智能研究院',
    },
    {
      name: 'description',
      content: '元知智能研究院',
    },
  ],
  favicon: '/favicon.ico',
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        { exact: true, path: '/detail', component: '@/pages/detail' },
        { path: '*', component: '@/pages/404' },
      ],
    },
  ],
});
