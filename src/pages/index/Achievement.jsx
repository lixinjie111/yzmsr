import React from 'react';
import { Link } from 'umi';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from '@/component/utils';

const Achievement = props => {
  const showBlocks = data =>
    data.map((item, index) => {
      return (
        <Col
          key={`block${index}`}
          className="block"
          md={6}
          xs={12}
          {...item.colProps}
        >
          <Link
            className="achievement-block-content"
            to={item.link ? item.link : ''}
          >
            <img src={item.img.children} height="100%" alt="img" />
            <div className="infoBlock">
              <h1 {...item.title}>{item.title.children}</h1>
              {item.content.children}
            </div>
            <div className="cardMaskBg"></div>
            <div className="cardMaskFg" {...item.mask.children}></div>
          </Link>
        </Col>
      );
    });

  const { dataSource } = props;
  const childrenToRender = showBlocks(dataSource.block.children);
  return (
    <div id="Achievement" key="Achievement" {...dataSource.wrapper}>
      <OverPack playScale={0.3} {...dataSource.page}>
        <QueueAnim type="bottom" key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </QueueAnim>
        <div className={`content-template ${props.className}`}>
          <Row key="ul" {...dataSource.block}>
            {childrenToRender}
          </Row>
        </div>
      </OverPack>
    </div>
  );
};

export default Achievement;
