/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import Banner from './Banner';
import AnchorNav from './AnchorNav';
import Sophia from './Sophia';
import MetaX from './MetaX';
import Business from './Business';
import Cooperation from './Cooperation';
import Earth from './Earth';
import Introduction from './Introduction';
import AntAnchorNav from './AntAnchorNav';
import Achievement from './Achievement';

import {
  BannerDataSource,
  IntroductionDataSource,
  SophiaDataSource,
  MetaXDataSource,
  BusinessDataSource,
  CooperationDataSource,
  EarthDataSource,
  AchievementDataSource,
} from './data/index';
import './less/index.less';

const Home = ({
  isMobile,
  setNavStyle,
  isAnchorNavFixed,
  setIsAnchorNavFixed,
}) => {
  return (
    <>
      {isAnchorNavFixed ? null : (
        <Banner
          dataSource={BannerDataSource}
          setNavStyle={setNavStyle}
          isMobile={isMobile}
        />
      )}
      <Introduction dataSource={IntroductionDataSource} isMobile={isMobile} />
      <AntAnchorNav setIsAnchorNavFixed={setIsAnchorNavFixed} />
      <Sophia
        dataSource={SophiaDataSource}
        isMobile={isMobile}
        setNavStyle={setNavStyle}
        setIsAnchorNavFixed={setIsAnchorNavFixed}
      />
      <MetaX dataSource={MetaXDataSource} isMobile={isMobile} />
      <Business dataSource={BusinessDataSource} isMobile={isMobile} />
      <Achievement dataSource={AchievementDataSource} isMobile={isMobile} />
      <Cooperation dataSource={CooperationDataSource} isMobile={isMobile} />
      <Earth dataSource={EarthDataSource} isMobile={isMobile} />
    </>
  );
};

export default Home;
