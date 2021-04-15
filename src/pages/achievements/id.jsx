import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Pagination, Spin } from 'antd';
import { useParams, useRequest } from 'umi';
import { generateAchievementArticalUrl } from '@/component/achievementType';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './id.less';

const generateRequest = (type, body) => ({
  url: generateAchievementArticalUrl(type),
  method: 'POST',
  body: JSON.stringify(body),
});

const Artical = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const { type, id } = useParams();
  const { data, error, loading, run } = useRequest(generateRequest, {
    manual: true,
    formatResult: t => {
      console.log(t);
      return t;
    },
  });

  console.log({ data, error, loading });

  const artical = data;
  const attachments = artical.attachmentsUrlList || [];

  useEffect(() => {
    run(type, {
      documentId: id,
    });
  }, [type, id]);

  useEffect(() => {
    setNavStyle(1);
    setIsAnchorNavFixed(false);
  }, [type, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, id]);

  return (
    <>
      <div id="artical" className="home-page-wrapper artical-wrapper">
        <Row className="home-page">
          <div className="artical">
            <div className="title">{artical.title}</div>
            <div className="subtitle">{artical.titleSecond}</div>
            <div>
              <span className="source">{artical.source}</span>
              <span className="publishDateFormat">
                {artical.publishDateFormat}
              </span>
            </div>
            <div className="content">{artical.documentText}</div>
            {attachments.length > 0 && (
              <div className="download-container">
                <div className="intro">请点击下方下载按钮获取完整报告</div>
                {attachments.map(attachment => (
                  <a
                    key={attachment.id}
                    href={attachment.link}
                    className="download"
                  >
                    {attachment.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Row>
      </div>
    </>
  );
};

export default Artical;
