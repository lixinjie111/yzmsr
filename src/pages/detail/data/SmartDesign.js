import React from 'react'
import { ClearDiv } from '@/component/utils'

export const SmartDesign = {
  title: {
    children: '智慧设计'
  },
  content: {
    children: (
      <>
        <p>设计交易/在线设计/设计撮合</p>
      </>)
  },
  cover: {
    img: {
      src: require('@/assets/business/Design.jpg')
    },
    txt: {
      children: 'Smart Design'
    }
  },
  intor: {
    title: {
      children: '元知科技智慧设计简介'
    },
    content: {
      children: (
        <>
          <p>
            智慧设计平台（合筑云）是提供房地产项目建设-交易-服务全生命周期的一站式智慧设计云服务平台。
          </p>
          <p>
            合筑云平台以全设计流程为主线，依托海量的数据库为基础，整合市场工具、用户需求，通过购买、合作、自主研发等方式建设智慧设计超级门户，打造设计图纸交易、设计服务撮合、在线设计工具、大师工作室专项服务等系列产品。提供支撑项目全生命周期，服务全设计行业，赋能甲乙双方的设计管理云服务。
          </p>
        </>
      )
    }
  },
  extend: {
    children: (
      <div className='home-page design-page'>
        <div className='feature'>
          <div className='title'>
            <h2>服务对象</h2>
          </div>
          <div className='content'>
            <p>
              地产商、个人业主、设计公司、大师工作室、个人设计师及主管政府机构。
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='title'>
            <h2>平台产品</h2>
          </div>
          <div className='content'>
            <div className="cover-txt cover-mobi">FIRST PARTY</div>
            <div className='left'>
              <h3>面对开发商、EPC总包的甲方设计管理产品</h3>
            </div>
            <div className='right'>
              <ul>
                <li><span>设计管理功能全覆盖，模块齐全</span></li>
                <li><span>全景计划及时预警，实时看图过程管控</span></li>
                <li><span>快速在线生成任务书</span></li>
                <li><span>成果库与成本系统打通，图纸不下线</span></li>
                <li><span>海量设计成果查询，丰富设计思路</span></li>
                <li><span>图纸验收要点固化在线上，验收中存在问题自动进入分析台账</span></li>
                <li><span>覆盖材料选型管理和设计变更图纸管理</span></li>
              </ul>
            </div>
            <ClearDiv />
            <div className="cover-txt">FIRST PARTY</div>
          </div>
          <div className='content'>
            <div className="cover-txt second cover-mobi">SECOND PARTY</div>
            <div className='right'>
              <h3>面对设计公司、大师工作室的乙方设计公司管理</h3>
            </div>
            <div className='left'>
              <ul>
                <li><span>覆盖经营管理和生产管理的设计公司精细化管理解决方案，业财一体化，预算到项目组、结算到个人</span></li>
                <li><span>项目管理细化分解到项目组、各专业、设计师，自动生成项目组和设计师的资源日历，方便团队和个人的工作管理</span></li>
                <li><span>可以C端结算到设计人员，可以使用自由设计师</span></li>
                <li><span>基于私有云/公有云的远程办公系统，与业务系统深度整合，通过提取生产过程数据，实时无感知检查设计师工作，远程审图，任务完成自动存档，大幅减少表单填写量，提高管理效率</span></li>
              </ul>
            </div>
            <ClearDiv />
            <div className="cover-txt second">SECOND PARTY</div>
          </div>
          <div className='content'>
            <div className="cover-txt online cover-mobi">ONLINE DESIGN</div>
            <div className='left'>
              <h3>面对C端设计师的在线设计平台</h3>
            </div>
            <div className='right'>
              <ul>
                <li><span>远程在线设计，不受时间、地域限制</span></li>
                <li><span>一键CAD字体、打印标准统一，项目组快速出图</span></li>
                <li><span>设计完成线上提交项目经理、专业总工审核，审核完成后自动通过合筑云线上提交甲方审核，无需上传图纸</span></li>
                <li><span>任务完成后工作量直接结算，员工以工资形式发放，自由设计师以劳务费形式发放，公开透明，后续接入大账房可以优化发放方式</span></li>
                <li><span>可以使用平台的设计工具，提高生产效率</span></li>
              </ul>
            </div>
            <ClearDiv />
            <div className="cover-txt online">ONLINE DESIGN</div>
          </div>
        </div>
      </div>
    )
  }
}