import React, { Component } from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';
import './code.css';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    
  }

  render() {
    return (
        <div>
          <NavBar
              mode="dark"
              rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
          >扫码</NavBar>
          <div>我是扫码</div>
        </div>
    );
  }
}

export default Code;