import React from 'react';
import { Row, Col } from 'antd';
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const Sophia = ({ dataSource, isMobile, setNavStyle, setIsAnchorNavFixed }) => {
  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: isMobile
      ? {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      }
      : {
        x: '+=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
  };
  const img = (
    <Col key="img" {...dataSource.imgWrapper}>
      <a style={{ width: '100%' }} href="https://www.yzsophia.com">
        <Parallax
          component='img'
          {...dataSource.imgb}
          style={{
            transform: 'translateY(-200px)',
            width: '100%',
          }}
          animation={{
            y: 70,
            playScale: [0, 1.5]
          }}
        >
        </Parallax>
        <Parallax
          component='img'
          {...dataSource.imgf}
          style={{
            transform: 'translateY(150px)',
          }}
          animation={{
            y: 0,
            playScale: [0, 1.2]
          }}
        >
        </Parallax>
      </a>
    </Col>
  );
  return (
    <Parallax
      id="Sophia"
      key="Sophia"
      {...dataSource.wrapper}
      animation={{
        onStartBack: e => {
          setNavStyle(0)
          setIsAnchorNavFixed(false)
        },
        onComplete: e => {
          setNavStyle(1)
        },
      }}>
      <Row {...dataSource.OverPack}>
        <Col key="text" className='content2-text' md={10} xs={24}>
          <OverPack playScale={.2}>
            <QueueAnim type='bottom' component='a' href="https://www.yzsophia.com">
              <h2 key="h1" {...dataSource.title}>
                {dataSource.title.children}
              </h2>
              <div key="p" {...dataSource.content}>
                {dataSource.content.children}
              </div>
            </QueueAnim>
          </OverPack>
        </Col>
        {img}
      </Row>
    </Parallax>
  );
}

export default Sophia;
