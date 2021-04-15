export default {
  'POST /document/documentList': {
    code: 200,
    msg: '',
    data: {
      list: [
        {
          documentId: 1,
          title: '测试一当客户端（浏览器）发送请求',
          publishDateFormat: '2020-10-20 08:00:00',
          pictureAttachment: {
            id: '1',
            link:
              'http://www.yzmsri.com/static/%E6%95%99%E8%82%B2.4f60870a.png',
            name: 'test 1',
          },
          description:
            '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
        },
        {
          documentId: 2,
          title: '测试二当客户端（浏览器）发送请求',
          publishDateFormat: '2020-10-21 08:00:00',
          pictureUrl: '',
          pictureAttachment: {
            id: '2',
            link:
              'http://www.yzmsri.com/static/%E6%95%99%E8%82%B2.4f60870a.png',
            name: 'test 2',
          },
          description:
            '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
        },
        {
          documentId: 3,
          title: '测试三当客户端（浏览器）发送请求',
          publishDateFormat: '2020-10-22 08:00:00',
          pictureUrl: '',
          pictureAttachment: {
            id: '3',
            link:
              'http://www.yzmsri.com/static/%E6%95%99%E8%82%B2.4f60870a.png',
            name: 'test 3',
          },
          description:
            '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
        },
      ],
      total: 20,
    },
  },
};
