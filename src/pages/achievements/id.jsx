import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Pagination, Spin } from 'antd';
import { useParams, useRequest } from 'umi';
import {
  AchievementType,
  GenerateAchievementArticalUrl,
} from '@/component/achievementType';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './index.less';

const Artical = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const { type, id } = useParams();
  const { data, error, loading, run } = useRequest(
    GenerateAchievementArticalUrl,
    {
      manual: true,
      formatResult: t => t,
    },
  );

  const articals = data ? (data.articals ? data.articals : []) : [];

  useEffect(() => {
    run(type, id);
  }, [type]);

  useEffect(() => {
    setNavStyle(1);
    setIsAnchorNavFixed(false);
  }, [type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div id="artical" className="home-page-wrapper achievement-wrapper">
      <Row className="home-page"></Row>
    </div>
  );
};

export default Artical;
