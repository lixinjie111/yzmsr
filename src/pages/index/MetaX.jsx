import React from 'react';
import { Row, Col } from 'antd';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const MetaX = ({ dataSource, isMobile }) => {
  const img = (
    <Col key="img" {...dataSource.imgWrapper}>
      <a style={{ width: '100%' }} href="https://www.yzmetax.com/zh-CN/">
        <Parallax
          component='img'
          {...dataSource.imgb}
          style={{
            transform: 'translateY(250px)',
            width: '100%',
          }}
          animation={{
            y: 0,
            playScale: [0, 1.5]
          }}
        >
        </Parallax>
        <Parallax
          component='img'
          {...dataSource.imgf}
          style={{
            transform: 'translateY(-150px)',
          }}
          animation={{
            y: 100,
            playScale: [0, 1.5]
          }}
        >
        </Parallax>
      </a>
    </Col>
  )
  return (
    <div id="MetaX" key="MetaX" {...dataSource.wrapper}>
      <Row {...dataSource.OverPack}>
        {!isMobile && img}
        <Col key="text" {...dataSource.textWrapper}>
          <OverPack playScale={.2}>
            <QueueAnim type='bottom' component='a' href="https://www.yzmetax.com/zh-CN/">
              <h2 key="h1" {...dataSource.title}>
                {dataSource.title.children}
              </h2>
              <div key="p" {...dataSource.content}>
                {dataSource.content.children}
              </div>
            </QueueAnim>
          </OverPack>
        </Col>
        {isMobile && img}
      </Row>
    </div>
  );
}

export default MetaX;
