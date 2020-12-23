import React from 'react'

export const SophiaDataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2' },
  imgWrapper: { className: 'content2-img', md: 14, xs: 24 },
  imgb: {
    className: 'img_sophia_b',
    src: require('@/assets/home/sophia_b.png')
  },
  imgf: {
    className: 'img_sophia_f',
    src: require('@/assets/home/sophia_f.png')
  },
  title: {
    className: 'content2-title kgrcm56x55q-editor_css',
    children: (
      <span>
        <p>SOPHIA</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          Sophia大数据与智能算法平台，源于元知科技集团十八大产业，扎根于各大业务场景，沉淀了1000G以上的训练样本，提供800+智能服务，形成了亿级接口；在27个领域，500+行业形成18大核心技术能力，包括边缘计算、深度学习、智能推荐、5G-IOT等；为政府及企业单位提供一站建仓、BI分析、数据治理、数据应用等AI与新科技全行业服务。
        </p>
      </span>
    ),
  },
};