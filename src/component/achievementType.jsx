/**
 * 研究成果
 */
export const AchievementTypes = [
  {
    type: 'special',
    name: '专栏',
    backendType: 0,
  },
  {
    type: 'report',
    name: '报告',
    backendType: 1,
  },
  {
    type: 'activity',
    name: '活动',
    backendType: 2,
  },
  {
    type: 'award',
    name: '奖项',
    backendType: 3,
  },
];

export const findAchievementTypeByType = type => {
  for (const achievement of AchievementTypes) {
    if (achievement.type === type) {
      return achievement;
    }
  }
};

export const generateAchievementUrl = type => `/achievements/${type}`;
export const generateAchievementArticalUrl = (type, id) =>
  `/achievements/${type}/articals/${id}`;
