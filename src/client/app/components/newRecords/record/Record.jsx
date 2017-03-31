import React from 'react';
import {render} from 'react-dom';
import './record.scss';

class Record extends React.Component {
  render() {
	  const bgImg = {
		  backgroundImage: `url('${this.props.pic}')`
	  }
    return (
      <div className="Record" style={bgImg}>
		  <div className="Record-content">
			  <p>{this.props.shortTitle}...</p>
			  <p>{this.props.price} {this.props.devise}</p>
			  <a target="_blank" href={this.props.viewitem} className="btn">Acheter</a>
		  </div>
		  <div className="Record-content-bg"></div>
	  </div>
    )
  }
}

export default Record;
