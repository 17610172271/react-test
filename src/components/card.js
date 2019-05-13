import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return (
        <div className="card-container">
          <div className="card-image"><img alt="" src={this.props.data.image_url} /></div>
          <div className="over-omit" style={{paddingTop: 6}}>{this.props.data.film_name}</div>
          <div className="text-gray-light text-xs" style={{paddingTop: 2}}>{this.props.data.viewer || 0}次观看</div>
        </div>
    );
  }
}

export default Card;