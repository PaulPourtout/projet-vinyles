import React from 'react';
import {render} from 'react-dom';
import './record.scss';

class Record extends React.Component {
  render() {
    return (
      <div className="Record">
		  <div className="Record-content">
			  <p>{this.props.shortTitle}</p>
			  <p>{this.props.price} {this.props.devise}</p>
			  <a href="#" className="btn">Acheter</a>
		  </div>
	  </div>
    )
  }
}

export default Record;
