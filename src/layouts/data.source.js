import React from 'react';
import { BusinessType } from '@/component/businessType';
import {
  AchievementTypes,
  generateAchievementUrl,
} from '@/component/achievementType';

/**
 * 生成业务链接字符
 * @param {string} type 业务类型值
 */
const GenerateLink = type => `/detail?type=${type}`;

const businessMenus = [
  {
    text: '智慧金融',
    href: GenerateLink(BusinessType.Financial),
  },
  {
    text: '智慧社区',
    href: GenerateLink(BusinessType.SmartCommunity),
  },
  {
    text: '智慧小镇',
    href: GenerateLink(BusinessType.SmartTown),
  },
  {
    text: '智慧医疗',
    href: GenerateLink(BusinessType.HealthCare),
  },
  {
    text: '智慧政务',
    href: GenerateLink(BusinessType.Government),
  },
  {
    text: '智慧建设',
    href: GenerateLink(BusinessType.Construction),
  },
  {
    text: '智慧设计',
    href: GenerateLink(BusinessType.SmartDesign),
  },
  {
    text: '智慧交易',
    href: GenerateLink(BusinessType.Trading),
  },
  {
    text: '工业设计',
    href: GenerateLink(BusinessType.IndustrialDesign),
  },
  {
    text: '智慧商业',
    href: GenerateLink(BusinessType.Business),
  },
];

const renderBusinessMenus = businessMenus.map(menu => ({
  children: {
    className: 'businessSubMenu',
    href: menu.href,
    children: [
      {
        children: menu.text,
        name: 'text',
      },
    ],
  },
}));

const renderAchievementMenus = AchievementTypes.map(achievement => ({
  children: {
    className: 'achievementSubMenu',
    href: generateAchievementUrl(achievement.type),
    children: [
      {
        children: achievement.name,
        name: 'text',
      },
    ],
  },
}));

export const NavDataSource = {
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    url1: require('../assets/logo.png'),
    url2: require('../assets/logo2.png'),
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item kgreiilmb9-editor_css',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>首页</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item1',
        className: 'header0-item kgre2v7oo9-editor_css',
        children: {
          href: 'https://www.yzsophia.com',
          children: [
            {
              children: (
                <span>
                  <p>Sophia</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item kgre2x4amd-editor_css',
        children: {
          href: 'https://www.yzmetax.com/zh-CN/',
          children: [
            {
              children: (
                <span>
                  <p>Meta-X</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item kgrcfgf83nb-editor_css',
        children: {
          href: './#Business',
          children: [
            {
              children: (
                <span>
                  <p>业务板块</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [...renderBusinessMenus],
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: './#Achievement',
          children: [
            {
              children: (
                <span>
                  <p>研究成果</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [...renderAchievementMenus],
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const FooterDataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1 kgrbcwhl46m-editor_css' },
  block: {
    className: 'home-page kgrbldz71z-editor_css',
    gutter: 0,
    children: [
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>联系我们</p>
            </span>
          ),
          className: 'kgrbzu1vqyq-editor_css',
        },
        childWrapper: {
          className: 'blockLinks',
          children: [
            {
              name: 'link0',
              children: (
                <span>
                  <p>guoyaxi@yuanzhi.com</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>加入我们</p>
            </span>
          ),
          className: 'kgrbps8u3x-editor_css',
        },
        childWrapper: {
          className: 'blockLinks',
          children: [
            {
              name: 'link0',
              name: 'text',
              children: (
                <span>
                  <p>硕博研究站</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block kgrc9ylmjyk-editor_css',
        title: {
          children: (
            <span>
              <p>关于元知</p>
            </span>
          ),
          className: 'kgrbqrugi88-editor_css',
        },
        childWrapper: {
          className: 'blockLinks',
          children: [
            {
              name: 'text',
              name: 'link0',
              children: (
                <span>
                  <p>
                    <span>法律声明</span>
                  </p>
                </span>
              ),
            },
            {
              name: 'text',
              name: 'link1',
              children: (
                <span>
                  <p>企业社会责任</p>
                </span>
              ),
            },
            {
              name: 'text',
              name: 'content~kgrbwv906e',
              children: (
                <span>
                  <p>投资者关系</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block qrGroup',
        title: {
          className: 'logo',
          children: (
            <img src={require('../assets/logo.png')} width="100%" alt="img" />
          ),
        },
        childWrapper: {
          children: [
            {
              className: 'qrcode',
              name: 'content0',
              children: (
                <img
                  src={require('../assets/qrcode.png')}
                  width="100%"
                  alt="img"
                />
              ),
            },
            {
              className: 'qrcodeTxt',
              name: 'content1',
              children: <p>官方微信</p>,
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper kgrbcxskdbo-editor_css' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright kgrbcp4b9l7-editor_css',
    children: (
      <span>
        Copyright©2019 元知科技.&nbsp;All rights reserved.&nbsp;
        <a href="http://www.beian.miit.gov.cn/" target="_blank">
          京ICP备20018041号-2
        </a>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041863"
          target="_blank"
        >
          <img
            src={require('@/assets/miit.png')}
            height="14"
            width="14"
            style={{ display: 'inline-block', margin: '-3px 5px 0' }}
          />
          京公网安备11010502041863号
        </a>
      </span>
    ),
  },
};
