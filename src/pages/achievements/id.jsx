import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Result, Spin } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useParams, useRequest } from 'umi';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './id.less';

const generateRequest = body => ({
  url: '/document/documentDetail',
  method: 'POST',
  body: JSON.stringify(body),
});

const Artical = ({ artical }) => {
  console.log('in artical', artical);
  const attachments = (artical ? artical.attachmentsList : []) || [];

  return (
    <div className="artical">
      <div className="title">{artical.title}</div>
      <div className="subtitle">{artical.titleSecond}</div>
      <div>
        <span className="source">{artical.source}</span>
        <span className="time">{artical.publishDateFormat}</span>
      </div>
      <div className="content">{artical.documentText}</div>
      {attachments.length > 0 && (
        <div className="download-container">
          <div className="intro">请点击下方下载按钮获取完整报告</div>
          {attachments.map(attachment => (
            <a key={attachment.id} href={attachment.link} className="download">
              <span className="name">{attachment.name}</span>
              <DownloadOutlined className="download-icon" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
const generateNetworkResultNode = (loading, artical, error) => {
  console.log('in generate', artical);
  if (loading) {
    return <Spin size="large" />;
  } else if (error) {
    return <Result status="error" title="网络异常" subTitle="请稍后重试" />;
  } else if (artical) {
    return <Artical artical={artical} />;
  }

  return <></>;
};

const ArticalPage = ({ setNavStyle, setIsAnchorNavFixed, isMobile }) => {
  const params = useParams();
  console.log(params);
  const { type, id } = useParams();
  const { data, error, loading, run } = useRequest(generateRequest, {
    manual: true,
  });

  const artical = data;
  console.log({ data, error, loading });

  useEffect(() => {
    run({
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
          {generateNetworkResultNode(loading, artical, error)}
        </Row>
      </div>
    </>
  );
};

export default ArticalPage;
