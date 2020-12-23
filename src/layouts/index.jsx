import React, { useState, useEffect } from 'react'
import { enquireScreen } from 'enquire-js';
import Nav from './Nav'
import Footer from './Footer'
import { Element } from 'rc-scroll-anim';
import {
  NavDataSource,
  FooterDataSource
} from './data.source'

import './less/index.less';

const Template = (props) => {
  const { children } = props
  const [isMobile, setIsMobile] = useState(false)
  const [isShowNav, setNavbgShow] = useState(true)
  const [prevScrollTop, setPrevScrollTop] = useState(0)
  const [navStyle, setNavStyle] = useState(0)
  const [isAnchorNavFixed, setIsAnchorNavFixed] = useState(false)

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    return () => {
      enquireScreen((b) => {
        setIsMobile(!!b);
      });
    }
  })

  return (
    <Element className="templates-wrapper" onScroll={({ scrollTop }) => {
      setNavbgShow(scrollTop <= 0 || scrollTop < prevScrollTop || !isAnchorNavFixed)
      setPrevScrollTop(scrollTop)
    }}>
      <Nav dataSource={NavDataSource} {...{ isMobile, isShowNav, navStyle }} />
      {
        React.Children.map(children,
          child => React.cloneElement(child, { isMobile, setNavbgShow, setNavStyle, isAnchorNavFixed, setIsAnchorNavFixed })
        )
      }
      <Footer dataSource={FooterDataSource} {...isMobile} />
    </Element>
  )
}

export default Template