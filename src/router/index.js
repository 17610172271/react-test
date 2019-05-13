import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from '../tools/asyncComponent';
import TabBar from 'antd-mobile/lib/tab-bar';
import Home from "../pages/home/home";
const Mine = asyncComponent(() => import("../pages/mine/mine"));
const Code = asyncComponent(() => import("../pages/code/code"));

class RouteConfig extends Component{
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    }
  }
  componentWillMount () {

  }
  render(){
    return(
      <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/code" component={Code} />
                </Switch>
                <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                  <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                  >
                    <TabBar.Item
                      icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                      selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                      title="首页"
                      key="home"
                      selected={this.state.selectedTab === 'redTab'}
                      onPress={() => {
                        window.location.href = window.location.origin + '#/'
                        this.setState({
                          selectedTab: 'redTab',
                        });
                      }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                      icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                      selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                      title="扫码"
                      key="order"
                      selected={this.state.selectedTab === 'yellowTab'}
                      onPress={() => {
                        window.location.href = window.location.origin + '#/code'
                        this.setState({
                          selectedTab: 'yellowTab',
                        });
                      }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                      icon={
                        <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                        />
                      }
                      selectedIcon={
                        <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                        />
                      }
                      title="我的"
                      key="mine"
                      selected={this.state.selectedTab === 'blueTab'}
                      onPress={() => {
                        window.location.href = window.location.origin + '#/mine'
                        this.setState({
                          selectedTab: 'blueTab',
                        });
                      }}
                    >
                    </TabBar.Item>
                  </TabBar>
                </div>
            </div>
      </Router>
    )
  }
}
export default RouteConfig
