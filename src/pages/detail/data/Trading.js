import React from 'react'
import { ClearDiv } from '@/component/utils'

export const Trading = {
  title: {
    children: '智慧交易'
  },
  content: {
    children: (
      <>
        <p>非标大宗商品交易/中小微企业赋能</p>
      </>)
  },
  cover: {
    img: {
      src: require('@/assets/business/Trading.jpg')
    },
    txt: {
      children: 'Smart Trading'
    }
  },
  intor: {
    title: {
      children: '元知科技智慧交易简介'
    },
    content: {
      children: (
        <>
          <p>
            优选好生活智慧交易平台，为优质客户提供一站式非标大宗商品的配置和交易平台。 以AI、大数据、VR/AR、脑神经科学为技术底层，链接43万专业经纪人，协同6000+合作伙伴，覆盖5大区域，100个核心城市，为3000万用户提供包括房产、装修、保险、医疗、养老、教育、旅游、汽车等数十类优质非标大宗商品服务，构建基于家庭全生命周期的智能资产配置模型，全面服务与家庭的非标资产配置及交易需求。与之同时，建立面向生态对象的八大门户，将科技与交易能力全面下沉到中小微企业，构建个人+平台的生态，实现伙伴的业务升级，智能创收。
          </p>
        </>
      )
    }
  },
  extend: {
    children: (
      <div className='home-page trading-page'>
        <div className='line lt'></div>
        <div className='line rt'></div>
        <div className='line lb'></div>
        <div className='line rb'></div>
        <ClearDiv />
        <div className='feature left'>
          <h2>科技赋能</h2>
          <p>
            依托元知科技先进技术能力，将AI、大数据、VR/AR、云计算、脑神经科学等落地应用到好生活生态场景，研发具有行业领先水平的交易系统、定价系统、风控系统、自动化决策系统，服务于智慧交易平台，并赋能与生态体系伙伴。
            </p>
        </div>
        <div className='feature'>
          <h2>生态赋能</h2>
          <p>
            以8大门户为载体，打通端到端的技术通道、数据通道、交易通道、服务通道，全面打造个人+团队+企业+平台的全场景、全流程生态闭环，将信息、科技、交易、金融服务下沉到所有参与方，以帮助生态合作伙伴成功，来构筑生态活力之源。
            </p>
        </div>
        <div className='feature right'>
          <h2>金融赋能</h2>
          <p>
            联合元知科技集团智慧金融伙伴壹链盟，建立好生活交易生态内中小微企业信用画像，将交易转化为优质资产，通过秒结秒付、财税服务实现中小微企业的快速交易变现，为中小微企业打造业务增速杠杆。
            </p>
        </div>
        <ClearDiv />
      </div>
    )
  }
}