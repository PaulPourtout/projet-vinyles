import React from 'react';
import {render} from 'react-dom';
import NewRecords from './../../components/newRecords/NewRecords.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <NewRecords/>
      </div>
    )
  }
}

export default Home;
