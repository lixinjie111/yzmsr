/**
 * 研究成果
 */
export const AchievementType = {
  Special: {
    type: 'special',
    name: '专栏',
  },
  Report: {
    type: 'report',
    name: '报告',
  },
  Activity: {
    type: 'activity',
    name: '活动',
  },
  Award: {
    type: 'award',
    name: '奖项',
  },
};

export const GenerateAchievementUrl = type => `/achievements/${type}`;
export const GenerateAchievementArticalUrl = (type, id) =>
  `/achievements/${type}/articals/${id}`;
