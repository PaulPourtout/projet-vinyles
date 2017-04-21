import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import './searchResults.scss';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    // // Create array containing all the records
    // const result = [];
    // // Looping through the items
    // this.state.newRecords.map(item => {
    //   result.push(<Record key={item.viewitem} pic={item.pic} shortTitle={item.shortTitle} price={item.price} devise={item.devise} viewitem={item.viewitem}/>);
    // });
    return (
      <div className="SearchResults">
        <h3>Resultat de la recherche :</h3>

        <div className="recordsContainer">
          coucou
        </div>
      </div>
    )
  }
}

export default SearchResults;
