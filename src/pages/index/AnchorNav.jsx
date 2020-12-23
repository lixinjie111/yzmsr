import React, { useState } from 'react'
import { Parallax } from 'rc-scroll-anim';

const anchorNavData = [
  {
    href: './#sophia-nav',
    children: 'Sophia'
  },
  {
    href: './#MetaX',
    children: 'Meta-X'
  },
  {
    href: './#Business',
    children: '业务板块'
  },
  {
    href: './#Cooperation',
    children: '合作与生态'
  },
  {
    href: './#Earth',
    children: '1+N'
  },
]

const AnchorNav = ({ isAnchorNavFixed, setIsAnchorNavFixed }) => {
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
        <div
          style={isAnchorNavFixed ? { position: 'fixed', top: 0, zIndex: 1, width: '100%', background: '#fafafa' } : null}>
          <div className='home-page anchorNav-page'>
            <ul className="anchorNav">
              {
                anchorNavData.map((data, index) =>
                  <li key={'ancNav' + index}>
                    <a
                      {...data}
                      className={data.href.indexOf(window.location.hash) > 0 ? 'actived' : ''}
                    ></a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default AnchorNav