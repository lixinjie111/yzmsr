import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.API_HOST': 'http://api.yzmsri.com/',
  },
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
      content:
        'MSRI隶属于元知科技集团，作为元知科技集团的数据管理中台和技术研发平台，为集团旗下各大智慧板块提供科技赋能的专业化服务。研究院面向大数据、人工智能、脑神经科学、物联网等领域，构建形成以Sophia大数据智算平台和Meta-X技术交易平台为核心的产品生态体系，为集团旗下各大业务板块提供技术创新应用和数字产业化等服务；并与政府、企业合作，提供全领域的大数据系统搭建和科学技术应用等智慧解决方案咨询服务。',
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
        {
          exact: true,
          path: '/achievements/:type',
          component: '@/pages/achievements/index',
        },
        {
          exact: true,
          path: '/achievements/:type/articals/:id',
          component: '@/pages/achievements/id',
        },
        { path: '*', component: '@/pages/404' },
      ],
    },
  ],
});
