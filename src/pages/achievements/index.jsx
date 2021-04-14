import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Pagination, Spin } from 'antd';
import { useParams, useRequest } from 'umi';
import { Achievement } from './data/achievement';
import {
  AchievementType,
  GenerateAchievementUrl,
} from '@/component/achievementType';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './index.less';

const { Item } = Menu;

const ArticalAbstract = artical => {
  return <></>;
};

const AchievementList = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const { page, setPage } = useState(1);
  const { type } = useParams();
  const { data, error, loading, run } = useRequest(GenerateAchievementUrl, {
    manual: true,
    formatResult: t => t,
  });

  const articals = data ? (data.articals ? data.articals : []) : [];

  const changePage = (newPage, pageSize) => {};

  useEffect(() => {
    run(type);
  }, [type]);

  useEffect(() => {
    setNavStyle(1);
    setIsAnchorNavFixed(false);
  }, [type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <>
      <div id="detail" className="home-page-wrapper achievement-wrapper">
        <Row className="home-page">
          <Parallax
            component={Col}
            animation={{
              y: isMobile ? 100 : 250,
              playScale: [0, 1.5],
            }}
            key="title"
            className="title-wrapper"
            md={11}
            xs={24}
          >
            <h1 key="h1" {...Achievement.title}></h1>
            <div key="content" {...Achievement.content}></div>
          </Parallax>
          <Parallax
            component={Col}
            animation={{
              y: 0,
              playScale: [0, 1.5],
            }}
            key="img"
            className="cover-wrapper"
            md={13}
            xs={24}
          >
            <img className="cover-img" {...Achievement.cover.img} />
          </Parallax>
          <p className="cover-txt" {...Achievement.cover.txt}></p>
        </Row>
        <Row className="home-page">
          <Col md={4} xs={24}>
            <Menu
              mode={isMobile ? 'vertical' : 'horizontal'}
              defaultSelectedKeys={[AchievementType.Special.type]}
              theme="dark"
            >
              {AchievementType.map(achievement => (
                <Item key={achievement.type}>
                  <a href={GenerateAchievementUrl(achievement.type)}>
                    {achievement.name}
                  </a>
                </Item>
              ))}
            </Menu>
          </Col>
          <Col md={20} xs={24}>
            <Row>
              {loading ? (
                <Spin />
              ) : (
                articals.map(artical => (
                  <Col md={12} xs={24}>
                    <ArticalAbstract artical={artical} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
        <Row className="home-page">
          <Pagination
            defaultCurrent={1}
            total={data.totalPages}
            current={page}
            defaultPageSize={8}
            onChange={changePage}
          />
        </Row>
      </div>
    </>
  );
};

export default AchievementList;
