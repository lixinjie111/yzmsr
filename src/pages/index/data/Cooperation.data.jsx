import React from 'react'

export const CooperationDataSource = {
  title: {
    children: (<span>
      <p>合作与生态</p>
    </span>)
  },
  content: {
    className:'title-content',
    children: (<span>
      <p>与遍及医疗、金融、教育等多个领域专业的合作伙伴共建生态，引领行业数字化转型</p>
    </span>)
  },
  details: [
    {
      img: {
        src: require('@/assets/home/cooperation/医疗.png')
      },
      title: {
        children: (<h1>医疗</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>北京盛诺基医药科技</h2>
            <p>创新药物研发</p>
          </td>
          <td>
            <h2>平安好医生</h2>
            <p>互联网医疗</p>
          </td>
          <td>
            <h2>华银健康</h2>
            <p>第三方医学检查</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/互联网.png')
      },
      title: {
        children: (<h1>移动互联网</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>彩讯科技公司</h2>
            <p>上市代码-300634</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/智能影像.png')
      },
      title: {
        children: (<h1>人工智能影像</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>小白世纪</h2>
            <p>医疗</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/金融.png')
      },
      title: {
        children: (<h1>金融</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>陆金所项目</h2>
            <p>互联网金融</p>
          </td>
          <td>
            <h2>平安金融壹账通</h2>
            <p>科技金融</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/环保.png')
      },
      title: {
        children: (<h1>环保</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>中国博奇公司</h2>
            <p>上市代码：02377</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/互联网1.png')
      },
      title: {
        children: (<h1>互联网安全</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>奇虎360项目</h2>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/智能电力.png')
      },
      title: {
        children: (<h1>智能电力</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>图迹科技公司</h2>
            <p>电力行业信息化综合服务商</p>
          </td>
        </tr>)
      }
    },
    {
      img: {
        src: require('@/assets/home/cooperation/教育.png')
      },
      title: {
        children: (<h1>教育</h1>)
      },
      content: {
        children: (<tr>
          <td>
            <h2>金岭教育科技公司</h2>
            <p>教育信息化综合服务商</p>
          </td>
        </tr>)
      }
    }
  ]
}