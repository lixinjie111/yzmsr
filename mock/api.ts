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
            '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
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
  'POST /document/documentDetail': {
    code: 200,
    msg: '',
    data: {
      documentId: '1',
      title:
        '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
      titleSecond:
        '当客户端（浏览器）发送请求，如：GET /api/users，那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。',
      pictureAttachment: {
        id: '1',
        url: 'http://www.yzmsri.com/static/%E6%95%99%E8%82%B2.4f60870a.png',
        name: 'test',
      },
      publishDateFormat: '2020-10-23 09:00:00',
      source: 'test test test',
      attachmentsList: [
        {
          id: '1',
          name: '当客户端（浏览器）发送请求，如：GET /api/users，那.pdf',
          link: 'http://www.yzmsri.com/static/%E6%95%99%E8%82%B2.4f60870a.png',
        },
      ],
      documentText: `
&lt;blockquote&gt;&lt;pre&gt;&lt;code class=&quot;language-css&quot;&gt;
.box{
  display: flex;
}
&lt;/code&gt;&lt;/pre&gt;&lt;/blockquote&gt;

&lt;p&gt;行内元素也可以使用 Flex 布局。&lt;/p&gt;

&lt;blockquote&gt;&lt;pre&gt;&lt;code class=&quot;language-css&quot;&gt;
.box{
  display: inline-flex;
}
&lt;/code&gt;&lt;/pre&gt;&lt;/blockquote&gt;

&lt;p&gt;Webkit 内核的浏览器，必须加上&lt;code&gt;-webkit&lt;/code&gt;前缀。&lt;/p&gt;

&lt;blockquote&gt;&lt;pre&gt;&lt;code class=&quot;language-css&quot;&gt;
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
&lt;/code&gt;&lt;/pre&gt;&lt;/blockquote&gt;
      `,
    },
  },
};
