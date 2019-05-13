import React, { Component } from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';
import Carousel from 'antd-mobile/lib/carousel';
import WingBlank from 'antd-mobile/lib/wing-blank';
import  Card from '../../components/card'
import './home.css';
import axios from 'axios';
import api from '../../api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      filmList: [],
      imgHeight: 176,
    }
  }

  componentDidMount() {
    this.getBannerList()
    this.getFilmList()
  }

  getBannerList() {
    axios.post(api.home.banner, {
      version: '1.0.0',
      client_type: 3
    }).then(res => {
      if (res.data.code === 1) {
        this.setState({bannerList: res.data.data})
      }
    })
  }

  getFilmList() {
    axios.post(api.home.list, {
      version: '1.0.0',
      page: 1,
      page_size: 30
    }).then(res => {
      if (res.data.code === 1) {
        this.setState({filmList: res.data.data.films})
      }
    })
  }

  render() {
    return (
        <div className="bg-white page-container">
          {/* 顶部 */}
          <NavBar
              mode="dark"
              rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />,
					  ]}>热映</NavBar>

          {/* 轮播 */}
          <div className="home-carousel">
            <WingBlank>
              <Carousel
                  autoplay={false}
                  infinite
              >
                {this.state.bannerList.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img
                          src={val.image_url}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                      />
                    </a>
                ))}
              </Carousel>
            </WingBlank>
          </div>

          {/* 列表 */}
          <div className="home-list-container">
            <h3>每日推荐·你想看的都在这里</h3>
            <div className="home-list p-o-sm clear">
              {this.state.filmList.map((val, index) => (
                  <Card key={val.id} data={val}></Card>
              ))}
            </div>
          </div>
        </div>
    );
  }
}

export default Home;