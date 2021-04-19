import React from 'react';

export const generateAchievementHeaderData = () => ({
  title: {
    children: '研究成果',
  },
  content: {
    children: (
      <>
        <p>专栏/报告/活动/奖项</p>
      </>
    ),
  },
  cover: {
    img: {
      src: require(`@/assets/achievement/special@2x.png`),
    },
    txt: {
      children: 'Research Findings',
    },
  },
});
