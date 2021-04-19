import React from 'react';
import {
  AchievementTypes,
  generateAchievementUrl,
} from '@/component/achievementType';

const animationNames = [
  'maskUpLeft',
  'maskRightDown',
  'maskLeftUp',
  'maskDownRight',
];

const achievementChildren = AchievementTypes.map((achievement, index) => ({
  link: generateAchievementUrl(achievement.type),
  img: {
    children: require(`@/assets/achievement/${achievement.type}@2x.png`),
  },
  title: { children: achievement.name },
  content: {
    children: <p></p>,
  },
  mask: {
    children: {
      style: { background: '#549995', animationName: animationNames[index] },
    },
  },
}));

export const AchievementDataSource = {
  wrapper: { className: 'home-page-wrapper achievement-wrapper' },
  page: { className: 'home-page achievement' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>研究成果</p>
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
              元知智能研究院致力于将脑神经科学与人工智能/大数据相结合，推动核心产业数字化与智慧化。
            </p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'achievement-img-wrapper',
    gutter: 16,
    children: achievementChildren,
  },
};
