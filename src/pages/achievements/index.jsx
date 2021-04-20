import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Pagination, Spin, Tooltip, Result } from 'antd';
import { useParams, useRequest, Link } from 'umi';
import { generateAchievementHeaderData } from './data/achievement';
import {
  AchievementTypes,
  findAchievementTypeByType,
  generateAchievementUrl,
  generateAchievementArticalUrl,
} from '@/component/achievementType';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './index.less';

const { Item } = Menu;

const DEFAULT_PAGE_SIZE = 8;

const LeftMenu = ({ selected }) => {
  return (
    <div className="left-menu">
      {AchievementTypes.map(achievement => {
        let className = 'menu-item';
        if (achievement.type === selected) {
          className += ' selected-item';
        }
        return (
          <div className={className} key={achievement.type}>
            <Link to={generateAchievementUrl(achievement.type)}>
              {achievement.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const ArticalAbstract = ({ artical, index, type }) => {
  let className = 'artical-abstract';
  if (index % 2 === 0) {
    className += ' first-column';
  } else {
    className += ' second-column';
  }
  let popText = '';
  if (artical.title) {
    popText += artical.title + ' ';
  }
  if (artical.titleSecond) {
    popText += artical.titleSecond;
  }
  return (
    <div className={className} key={artical.documentId}>
      <a href={generateAchievementArticalUrl(type, artical.documentId)}>
        <img
          src={artical.pictureAttachment.link}
          className="artical-cover"
          alt={artical.pictureAttachment.name}
        />
        <div className="artical-content">
          <Tooltip title={popText}>
            <div className="artical-title">{artical.title}</div>
          </Tooltip>
          <Tooltip title={popText}>
            <div className="artical-subtitle">{artical.titleSecond}</div>
          </Tooltip>
          <div className="artical-time">{artical.publishDateFormat}</div>
          <div className="artical-desc">{artical.description}</div>
        </div>
      </a>
    </div>
  );
};

const generateRequest = body => ({
  url: '/document/documentList',
  method: 'POST',
  body: JSON.stringify(body),
});

const generateNetworkResultNode = (loading, articals, error, type) => {
  if (loading) {
    return <Spin size="large" />;
  }
  if (error) {
    <Result status="error" title="网络异常" subTitle="请稍后重试" />;
  }

  return (
    <Row className="artical-abstract-list-container">
      {articals.map((artical, index) => (
        <Col md={12} xs={24} key={artical.documentId}>
          <ArticalAbstract artical={artical} index={index} type={type} />
        </Col>
      ))}
    </Row>
  );
};

const AchievementList = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const [Achievement, setAchievement] = useState(
    generateAchievementHeaderData(),
  );
  const [page, setPage] = useState(1);
  const { type } = useParams();
  const { data, error, loading, run } = useRequest(generateRequest, {
    manual: true,
  });

  const articals = data ? (data.list ? data.list : []) : [];
  const total = data ? (data.total ? data.total : 0) : 0;

  const changePage = newPage => {
    setPage(newPage);
  };

  useEffect(() => {
    setAchievement(generateAchievementHeaderData(type));
  }, [type]);

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

  return (
    <>
      <div id="detail" className="home-page-wrapper">
        <Row className="home-page detail-wrapper">
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
      </div>
      <div className="achievement-wrapper">
        <div className="home-page">
          <div className="content-container">
            <div className="left-content">
              <LeftMenu selected={type} />
            </div>
            <div className="right-content">
              {generateNetworkResultNode(loading, articals, error, type)}
            </div>
          </div>
          {total > DEFAULT_PAGE_SIZE && (
            <div className="pagination-container">
              <Pagination
                defaultCurrent={1}
                total={total}
                current={page}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                onChange={changePage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AchievementList;
