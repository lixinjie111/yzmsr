import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Pagination, Spin, Result } from 'antd';
import { useParams, useRequest } from 'umi';
import { Achievement } from './data/achievement';
import {
  AchievementTypes,
  findAchievementTypeByType,
  generateAchievementUrl,
} from '@/component/achievementType';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './index.less';

const { Item } = Menu;

const DEFAULT_PAGE_SIZE = 8;

const ArticalAbstract = ({ artical }) => {
  console.log('artical', artical);
  return (
    <Row key={artical.documentId}>
      <div className="artical-abstract">
        <img
          src={artical.pictureAttachment.link}
          className="artical-cover"
          alt={artical.pictureAttachment.name}
        />
        <div className="artical-content">
          <div className="artical-title">{artical.title}</div>
          <div className="artical-time">{artical.publishDateFormat}</div>
          <div className="artical-desc">{artical.description}</div>
        </div>
      </div>
    </Row>
  );
};

const generateRequest = body => ({
  url: '/document/documentList',
  method: 'POST',
  body: JSON.stringify(body),
});

const generateNetworkResultNode = (loading, articals, error) => {
  if (loading) {
    return <Spin size="large" />;
  }
  if (error) {
    <Result status="error" title="网络异常" subTitle="请稍后重试" />;
  }

  return (
    <Row className="artical-abstract-list-container">
      {articals.map(artical => (
        <Col md={12} xs={24} key={artical.documentId}>
          <ArticalAbstract artical={artical} />
        </Col>
      ))}
    </Row>
  );
};

const AchievementList = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const [page, setPage] = useState(1);
  const { type } = useParams();
  const { data, error, loading, run } = useRequest(generateRequest, {
    manual: true,
  });

  const articals = data ? (data.list ? data.list : []) : [];
  const total = data ? (data.total ? data.total : 0) : 0;

  console.log({ data, articals, total, error, loading });

  const changePage = newPage => {
    setPage(newPage);
  };

  useEffect(() => {
    const achievementType = findAchievementTypeByType(type);
    run({
      page: page,
      pageSize: DEFAULT_PAGE_SIZE,
      documentType: achievementType.backendType,
    });
  }, [type, page]);

  useEffect(() => {
    setNavStyle(1);
    setIsAnchorNavFixed(false);
  }, [type, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, page]);

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
              mode={isMobile ? 'horizontal' : 'vertical'}
              defaultSelectedKeys={[AchievementTypes[0].type]}
              theme="dark"
            >
              {AchievementTypes.map(achievement => (
                <Item key={achievement.type}>
                  <a href={generateAchievementUrl(achievement.type)}>
                    {achievement.name}
                  </a>
                </Item>
              ))}
            </Menu>
          </Col>
          <Col md={20} xs={24}>
            {generateNetworkResultNode(loading, articals, error)}
          </Col>
        </Row>
        <Row className="home-page">
          <Pagination
            defaultCurrent={1}
            total={total}
            current={page}
            defaultPageSize={DEFAULT_PAGE_SIZE}
            onChange={changePage}
          />
        </Row>
      </div>
    </>
  );
};

export default AchievementList;
