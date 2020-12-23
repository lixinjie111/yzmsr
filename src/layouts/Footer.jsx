import React from 'react';
import { Row, Col } from 'antd';
import { getChildrenToRender } from '../component/utils';

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <div className='container'>
            <h2 {...title}>
              {title.children}
            </h2>
            <div {...childWrapper}>
              {childWrapper.children.map(getChildrenToRender)}
            </div>
          </div>
        </Col>
      );
    });

  render() {
    const { dataSource } = this.props;
    const childrenToRender = this.getLiChildren(dataSource.block.children);
    return (
      <div {...dataSource.wrapper}>
        <div {...dataSource.OverPack}>
          <Row
            type="bottom"
            key="ul"
            {...dataSource.block}
          >
            {childrenToRender}
          </Row>
          <div
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
