import React from 'react'

export const BannerDataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    type: 'acrossOverlay',
    arrow: false,
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: {
          className: 'bg',
        },
        bgContent: {
          key: 'bgContent',
          className: 'bgContent',
          children: (<iframe src='/particle/'></iframe>)
        },
        intro: {
          className: 'banner1-intro',
          children: ''
        },
        introMobi: {
          className: 'banner1-intro',
          children: ''
        }
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg' },
        bgContent: {
          key: 'bgContent',
          className: 'bgContent',
          style: { backgroundImage: `url(${require('@/assets/home/switchPic2.png')})`, backgroundColor: '#000d27' }
        },
        intro: {
          className: 'banner1-intro',
          children: ''
        },
        introMobi: {
          children: ''
        },
        title: {
          className: 'banner1-title',
          children:
            '元知科技',
        },
        content: {
          className: 'banner1-content',
          children: null,
        },
      },
    ],
  },
};