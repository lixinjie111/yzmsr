import React from 'react'
import { BusinessType } from '@/component/businessType'

/**
 * 生成业务链接字符
 * @param {string} type 业务类型值
 */
const GenerateLink = (type) => `/detail?type=${type}`

export const BusinessDataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>业务板块赋能</p>
          </span>
        ),
        className: 'title-h1 kgrdd43cant-editor_css',
      },
      {
        name: 'content',
        className: 'title-content kgrddc5kkn-editor_css',
        children: (
          <span>
            <p>
              元知科技集团产业包括，已经落地成熟，拥有世界级AI核心技术DenseNet算法和高维张量3D网络的智慧医疗板块；服务于40万户家庭，760余个项目的智慧社区平台；服务于43万专业经纪人，为3000万用户提供包括房产、保险、医疗、养老、教育等数十类优质非标大宗商品服务的智慧交易平台；以及精准服务于数字政务建设的智慧小镇模块，服务于垂直行业的智慧建设、智慧教育模块等。
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        link: GenerateLink(BusinessType.Financial),
        img: {
          children:
            require('@/assets/home/智慧金融.png'),
        },
        title: { children: '智慧金融' },
        content: {
          children: (<p>
            壹链盟-供应链金融<br />
              并购智能化<br />
              金融大数据<br />
          </p>)
        },
        mask: {
          children: {
            style: { background: '#549995', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.SmartCommunity),
        img: {
          children:
            require('@/assets/home/智慧社区.png'),
        },
        title: { children: '智慧社区' },
        content: {
          children: (<p>
            合生活<br />
              智慧物业<br />
              智慧商超<br />
              智慧停车
          </p>)
        },
        mask: {
          children: {
            style: { background: '#41699d', animationName: 'maskRightDown' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.SmartTown),
        img: {
          children:
            require('@/assets/home/智慧小镇.png'),
        },
        title: { children: '智慧小镇' },
        content: {
          children: (<p>
            智慧产业<br />
              生活服务<br />
              综合治理
          </p>)
        },
        mask: {
          children: {
            style: { background: '#4589b5', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.HealthCare),
        img: {
          children:
            require('@/assets/home/智慧医疗.png'),
        },
        title: { children: '智慧医疗' },
        content: {
          children: (<p>
            家庭健康<br />
              移动医疗<br />
              精准医疗产业生态<br />
              医药智库<br />
              互联网医院<br />
              小白世纪
          </p>)
        },
        mask: {
          children: {
            style: { background: '#d6d2d0', animationName: 'maskDownRight' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.Government),
        img: {
          children:
            require('@/assets/home/智慧政务.png'),
        },
        title: { children: '智慧政务' },
        content: {
          children: (<p>
            审批智能化<br />
              运营智能化<br />
              惠民智能化
          </p>)
        },
        mask: {
          children: {
            style: { background: '#5f8adf', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.Construction),
        img: {
          children:
            require('@/assets/home/智慧建设.png'),
        },
        title: { children: '智慧建设' },
        content: {
          children: (<p>
            新基建<br />
              智慧设计<br />
              住建局合作
          </p>)
        },
        mask: {
          children: {
            style: { background: '#89c0e6', animationName: 'maskRightDown' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.SmartDesign),
        img: {
          children:
            require('@/assets/home/智慧设计.png'),
        },
        title: { children: '智慧设计' },
        content: {
          children: (<p>
            设计交易<br />
              在线设计<br />
              设计撮合
          </p>)
        },
        mask: {
          children: {
            style: { background: '#d1d2d6', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.Trading),
        img: {
          children:
            require('@/assets/home/智慧交易.png'),
        },
        title: { children: '智慧交易' },
        content: {
          children: (<p>
            非标大宗商品交易<br />
              中小微企业赋能
          </p>)
        },
        mask: {
          children: {
            style: { background: '#bdb8b0', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.IndustrialDesign),
        img: {
          children:
            require('@/assets/home/工业设计.png'),
        },
        title: { children: '工业设计' },
        content: {
          children: (<p>
            非夕（斯坦福全球领先的机器人技术）
          </p>)
        },
        mask: {
          children: {
            style: { background: '#5b5b54', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        link: GenerateLink(BusinessType.Business),
        img: {
          children:
            require('@/assets/home/智慧商业.png'),
        },
        title: { children: '智慧商业' },
        content: {
          children: (<p>
            商管/合生通
          </p>)
        },
        mask: {
          children: {
            style: { background: '#915c39', animationName: 'maskRightDown' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧教育.png'),
        },
        title: { children: '智慧教育' },
        content: {
          children: (<p>
            智慧校园<br />
              在线教育<br />
              教育大数据<br />
              三所本科院校<br />
          </p>)
        },
        mask: {
          children: {
            style: { background: '#b7b2ab', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧农业.png'),
        },
        title: { children: '智慧农业' },
        content: {
          children: (<p>
            农业产品研究<br />
              农业大数据<br />
              农业交易配送<br />
              农业研发<br />
              农业生产管理<br />
              培训
          </p>)
        },
        mask: {
          children: {
            style: { background: '#8ab247', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧宗教.png'),
        },
        title: { children: '智慧宗教' },
        content: {
          children: ''
        },
        mask: {
          children: {
            style: { background: '#98816b', animationName: 'maskDownRight' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧财税.png'),
        },
        title: { children: '智慧财税' },
        content: {
          children: (<p>
            合道科技<br />
              计划/资金/财报/<br />
              资产分析/投资管理/<br />
              风险管理<br />
          </p>)
        },
        mask: {
          children: {
            style: { background: '#bea58e', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧文娱.png'),
        },
        title: { children: '智慧文娱' },
        content: {
          children: (<p>
            SUPER GEN<br />
              智慧动漫<br />
              智慧娱乐<br />
              智慧票务<br />
              超竞集团<br />
              EDG
          </p>)
        },
        mask: {
          children: {
            style: { background: '#8b8b93', animationName: 'maskDownRight' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧交通.png'),
        },
        title: { children: '智慧交通' },
        content: {
          children: ''
        },
        mask: {
          children: {
            style: { background: '#b28000', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧法律.png'),
        },
        title: { children: '智慧法律' },
        content: {
          children: (<p>
            法律大数据<br />
              AI法律<br />
              法律教育
          </p>)
        },
        mask: {
          children: {
            style: { background: '#dfdfe0', animationName: 'maskLeftUp' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧能源.png'),
        },
        title: { children: '智慧能源' },
        content: {
          children: ''
        },
        mask: {
          children: {
            style: { background: '#b2c7e0', animationName: 'maskRightDown' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/智慧企业.png'),
        },
        title: { children: '智慧企业' },
        content: {
          children: (<p>
            智慧人力<br />
              智慧风控<br />
              好管家
          </p>)
        },
        mask: {
          children: {
            style: { background: '#2060c3', animationName: 'maskDownRight' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/研究院.png'),
        },
        title: { children: '研究院' },
        content: {
          children: (<p>
            Sophia<br />
              Meta-X
          </p>)
        },
        mask: {
          children: {
            style: { background: '#c3c4c0', animationName: 'maskUpLeft' }
          }
        },
      },
      {
        img: {
          children:
            require('@/assets/home/元知资本.png'),
        },
        title: { children: '元知资本' },
        content: {
          children: (<p>
            小白世纪<br />
              图迹科技<br />
              盛诺基医药<br />
              苍穹数据<br />
              金岭教育<br />
              FLEXIV
          </p>)
        },
        mask: {
          children: {
            style: { background: '#0f1624', animationName: 'maskRightDown' }
          }
        },
      },
      {
        colProps: {
          id:'block-more',
          md: 12,
          xs: 24
        },
        img: {
          children:
            require('@/assets/home/more.jpg'),
        },
        title: { children: '更多板块 敬请期待...' },
        content: {
          children: null
        },
        mask: {
          children: {
            style: { background: '#d8e2ea', animationName: 'maskLeftUp' }
          }
        },
      },
    ],
  },
};