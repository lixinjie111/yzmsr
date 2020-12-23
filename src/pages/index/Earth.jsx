import React from 'react'
import { Row, Col } from 'antd';
import { OverPack } from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim';

const Earth = ({ dataSource }) => {

  return (
    <div id='Earth' key='Earth' className='home-page-wrapper earth-wrapper'>
      <OverPack className='home-page' component={Row}>
        <QueueAnim type='bottom' key='title' className='title-wrapper' component={Col} componentProps={{ md: 12, xs: 24 }} >
          <h1 key="h1" {...dataSource.title}>
          </h1>
          <div key="content" className='title-content' {...dataSource.content}>
          </div>
        </QueueAnim>
        <iframe {...dataSource.earth} />
      </OverPack>
    </div>
  )
}

export default Earth