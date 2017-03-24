import React from 'react';
import {render} from 'react-dom';
import Header from './../../components/header/Header.jsx';
import NewRecords from './../../components/newRecords/NewRecords.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header/>
        <NewRecords/>
      </div>
    )
  }
}

export default Home;
