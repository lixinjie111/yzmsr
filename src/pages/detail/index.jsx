import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import {
  HealthCare,
  Business,
  IndustrialDesign,
  SmartTown,
  Construction,
  Financial,
  Government,
  Trading,
  SmartDesign,
  SmartCommunity
} from './data/index'
import { BusinessType } from '../../component/businessType'
import { Parallax, OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './index.less'

const Detail = ({ setNavStyle, setIsAnchorNavFixed, isMobile, history }) => {
  const [dataType, setDataType] = useState(HealthCare)

  useEffect(() => {
    const businessType = history.location.query.type
    if (businessType) {
      switch (businessType.toLowerCase()) {
        case BusinessType.HealthCare:
          setDataType(HealthCare)
          break
        case BusinessType.Business:
          setDataType(Business)
          break
        case BusinessType.IndustrialDesign:
          setDataType(IndustrialDesign)
          break
        case BusinessType.SmartTown:
          setDataType(SmartTown)
          break
        case BusinessType.Construction:
          setDataType(Construction)
          break
        case BusinessType.Financial:
          setDataType(Financial)
          break
        case BusinessType.Government:
          setDataType(Government)
          break
        case BusinessType.Trading:
          setDataType(Trading)
          break
        case BusinessType.SmartDesign:
          setDataType(SmartDesign)
          break
        case BusinessType.SmartCommunity:
          setDataType(SmartCommunity)
          break
        default:
          setDataType(HealthCare)
          break
      }
    }
  })

  useEffect(() => {
    setNavStyle(1)
    setIsAnchorNavFixed(false)
  }, [dataType])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [dataType])

  return (
    <>
      <div id='detail' className='home-page-wrapper detail-wrapper'>
        <Row className='home-page'>
          <Parallax
            component={Col}
            animation={{
              y: isMobile ? 100 : 250,
              playScale: [0, 1.5]
            }}
            key='title' className='title-wrapper' md={11} xs={24}>
            <h1 key="h1" {...dataType.title}></h1>
            <div key="content"  {...dataType.content}></div>
          </Parallax>
          <Parallax
            component={Col}
            animation={{
              y: 0,
              playScale: [0, 1.5]
            }}
            key='img' className='cover-wrapper' md={13} xs={24}>
            <img className='cover-img' {...dataType.cover.img} />
          </Parallax>
          <p className='cover-txt' {...dataType.cover.txt}>
          </p>
        </Row>
        <OverPack component={Row} className='home-page intro-page'>
          <QueueAnim type='bottom' key='intro'>
            <div>
              <h1 key='tit' {...dataType.intor.title}></h1>
            </div>
            <div key='cont' {...dataType.intor.content}></div>
          </QueueAnim>
        </OverPack>
      </div>
      <div className='home-page-wrapper' {...dataType.extend}></div>
    </>
  )
}

export default Detail