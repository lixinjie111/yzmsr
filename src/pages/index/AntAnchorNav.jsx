import React, { useState } from 'react'
import { Parallax } from 'rc-scroll-anim';
import { Anchor } from 'antd';

const { Link } = Anchor;

const anchorNavData = [
  {
    href: '#sophia-nav',
    title: 'Sophia'
  },
  {
    href: '#MetaX',
    title: 'Meta-X'
  },
  {
    href: '#Business',
    title: '业务板块'
  },
  {
    href: '#Cooperation',
    title: '合作与生态'
  },
  {
    href: '#Earth',
    title: '1+N'
  },
]

const AntAnchorNav = ({ setIsAnchorNavFixed }) => {
  return (
    <>
      <div id='sophia-nav' className='home-page-wrapper' style={{ height: '1px' }}></div>
      <Parallax id='anchorNav' className='home-page-wrapper'
        animation={{
          onComplete: e => {
            setIsAnchorNavFixed(true)
          },
          onStartBack: e => {
            setIsAnchorNavFixed(false)
          }
        }}
      >
        <Anchor className="home-page anchorNav-page">
          {
            anchorNavData.map((data, index) =>
              <Link key={'ancNav' + index} {...data} />
            )
          }
        </Anchor>
      </Parallax>
    </>
  )
}

export default AntAnchorNav