import React from 'react';
import {render} from 'react-dom';
import Header from './../../components/header/Header.jsx';
import NewRecords from './../../components/newRecords/NewRecords.jsx';
import Description from '../../components/description/Description.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Contact from '../../components/contact/Contact.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header/>
        <NewRecords/>
		<Description />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home;
