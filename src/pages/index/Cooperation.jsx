import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Parallax, OverPack } from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim';

const Cooperation = ({ dataSource, isMobile }) => {
  const [isFixed, setFixed] = useState(false)

  return (
    <div id='Cooperation' key='Cooperation' className='home-page-wrapper cooperation-wrapper'>
      {
        isMobile ?
          null :
          <div className='title-wrapper' style={{ display: isFixed ? 'block' : 'none' }}>
            <div className='title-block' style={{ position: 'fixed', top: 0, width: '100%' }}>
              <div className='home-page' style={{ paddingTop: '183px' }}>
                <h1 key="h1" {...dataSource.title}>
                  {dataSource.title.children}
                </h1>
                <div key="content" {...dataSource.content} style={{ width: '50%', paddingRight: '7em' }}>
                  {dataSource.content.children}
                </div>
              </div>
            </div>
          </div>
      }
      <Parallax
        className='home-page'
        style={{ position: 'initial' }}
        animation={{
          opacity: 1,
          onStartBack: e => setFixed(false),
          onComplete: e => setFixed(true),
        }}
        component={Row}
      >
        <OverPack playScale={.2} key='title' className='title-wrapper' component={Col} componentProps={{ md: 12, xs: 24 }}>
          <QueueAnim type='bottom' className='title-block' style={isMobile ? null : { position: isFixed ? 'fixed' : 'initial', display: isFixed ? 'none' : 'block' }}>
            <h1 key="h1" {...dataSource.title}>
              {dataSource.title.children}
            </h1>
            <div key="content" {...dataSource.content}>
              {dataSource.content.children}
            </div>
          </QueueAnim>
        </OverPack>
        <Col key='details' className='details' md={12} xs={24}>
          {dataSource.details.map((detail, index) => {
            return (
              <div key={`block-d-${index}`} className='info-group'>
                <img key={`img-d-${index}`} {...detail.img} alt="" width='100%' />
                <div key={`info-d-${index}`} className='info-d'>
                  {detail.title.children}
                  <table>
                    <tbody>
                      {detail.content.children}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </Col>
      </Parallax>
    </div>
  )
}

export default Cooperation