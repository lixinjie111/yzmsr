import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage = () => (
  <div className="home-page-wrapper">
    <div className="home-page">
      <Result
        status={404}
        title="404"
        subTitle="很抱歉，当前访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            回到首页
      </Button>
        }
      />
    </div>
  </div>
);

export default NoFoundPage;