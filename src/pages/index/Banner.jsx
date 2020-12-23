import React, { useEffect } from 'react';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';

const { BgElement } = Element;
const Banner = ({ dataSource, setNavStyle, isMobile }) => {
  useEffect(() => {
    setNavStyle(0)
  })
  const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
    const elem = item.BannerElement;
    const elemClassName = elem.className;
    delete elem.className;
    const { bg, bgContent, textWrapper, intro, introMobi } = item;
    return (
      <Element key={i.toString()} {...elem} prefixCls={elemClassName}>
        <BgElement key="bg" {...bg} />
        <div {...bgContent}></div>
        <QueueAnim
          type={['left', 'right']}
          duration={2000}
          delay={200}
          key="text"
          {...textWrapper}
        >
          <div key='textBlock'>
            {
              isMobile ?
                <div key='intro' {...introMobi}></div>
                :
                <div key='intro' {...intro}></div>
            }
          </div>
        </QueueAnim>
      </Element>
    );
  });
  return (
    <div id="Banner1_0" key="Banner1_0" {...dataSource.wrapper}>
      <TweenOneGroup
        key="bannerGroup"
        enter={{ opacity: 0, type: 'from' }}
        leave={{ opacity: 0 }}
        component=""
      >
        <div className="banner1-wrapper" key="wrapper">
          <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
            {childrenToRender}
          </BannerAnim>
        </div>
      </TweenOneGroup>
    </div>
  );
}

export default Banner;
