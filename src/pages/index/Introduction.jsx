import React from 'react'
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

const Introduction = ({ dataSource }) => {
  const { title, content } = dataSource

  return (
    <OverPack playScale={0.3} id="Introduction" key="Introduction" className="home-page-wrapper intro-wrapper">
      <QueueAnim type='bottom' className='home-page'>
        <div key="title" {...title}>
        </div>
        <div key="content" {...content}>
        </div>
      </QueueAnim>
    </OverPack>
  )
}

export default Introduction