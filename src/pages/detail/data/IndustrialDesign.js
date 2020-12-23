import React from 'react'

export const IndustrialDesign = {
  title: {
    children: '工业设计'
  },
  content: {
    children: (
      <>
        <p>非夕（斯坦福全球领先的机器人技术）</p>
      </>)
  },
  cover: {
    img: {
      src: require('@/assets/business/IndustrialDesign.jpg')
    },
    txt: {
      children: 'Industrial Design'
    }
  },
  intor: {
    title: {
      children: '元知科技工业设计简介'
    },
    content: {
      children: (
        <>
          <p>
            工业设计版块专注于研发、生产集高精度力控、计算机视觉和人工智能技术于一体的稳定高效的自适应机器人产品，利用AI配合自适应技术,摆脱位置精度对于AI的约束,利用更精细的力觉控制为AI机器人带来更多的发挥空间。非夕携手合作伙伴，在插拔组装、打磨抛光、采摘分拣、农业、航空航天、服务业等不同行业提供整体、创新性的解决方案和服务。通过应用服务与解决方案试点，持续探索“工业4.0”发展路径，并将成果服务于制造业提升，助力“中国制造2025”目标实现。
          </p>
        </>
      )
    }
  },
  extend: {
    children: null
  }
}