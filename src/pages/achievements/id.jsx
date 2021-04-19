import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Result, Spin, BackTop } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useParams, useRequest } from 'umi';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { decodeHTMLSpecialChars } from '../../component/utils';

import './id.less';

const pdfIcon = require('@/assets/achievement/icon_file_pdf@2x.png');

const generateRequest = body => ({
  url: '/document/documentDetail',
  method: 'POST',
  body: JSON.stringify(body),
});

const Artical = ({ artical }) => {
  const attachments = (artical ? artical.attachmentsList : []) || [];
  const text = artical.documentText
    ? decodeHTMLSpecialChars(artical.documentText)
    : '';

  return (
    <div className="artical">
      <div className="title">{artical.title}</div>
      <div className="subtitle">{artical.titleSecond}</div>
      <div>
        <span className="source">{artical.source}</span>
        <span className="time">{artical.publishDateFormat}</span>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
      {attachments.length > 0 && (
        <div className="download-container">
          <div className="intro">请点击下方下载按钮获取完整报告</div>
          {attachments.map(attachment => (
            <a key={attachment.id} href={attachment.link} className="download">
              <img src={pdfIcon} className="file-icon"></img>
              <span className="name">{attachment.name}</span>
              <DownloadOutlined className="download-icon" />
            </a>
          ))}
        </div>
      )}
      <BackTop></BackTop>
    </div>
  );
};
const generateNetworkResultNode = (loading, artical, error) => {
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
  const { type, id } = useParams();
  const { data, error, loading, run } = useRequest(generateRequest, {
    manual: true,
  });

  const artical = data;

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
