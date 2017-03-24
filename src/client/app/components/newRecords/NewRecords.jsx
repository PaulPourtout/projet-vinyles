import React from 'react';
import {render} from 'react-dom';
import Record from './record/Record.jsx';
import fetchJsonp from 'fetch-jsonp';
import './newRecords.scss';

class NewRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecords: []
    };
  }

  componentDidMount() {
    let urlfilter = "";
    // Generates an indexed URL snippet from the array of item filters
    function buildURLArray() {
      // Iterate through each filter in the array
      for (var i = 0; i < filterNewRecords.length; i++) {
        //Index each item filter in filterNewRecords
        var itemfilter = filterNewRecords[i];
        // Iterate through each parameter in each item filter
        for (var index in itemfilter) {
          // Check to see if the paramter has a value (some don't)
          if (itemfilter[index] !== "") {
            if (itemfilter[index]instanceof Array) {
              for (var r = 0; r < itemfilter[index].length; r++) {
                var value = itemfilter[index][r];
                urlfilter += "&itemFilter\(" + i + "\)." + index + "\(" + r + "\)=" + value;
              }
            } else {
              urlfilter += "&itemFilter\(" + i + "\)." + index + "=" + itemfilter[index];
            }
          }
        }
      }
    }; // End buildURLArray() function

    // Set callback function
    const _cb_lastRecords = (root) => {
      let items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
      const html = [];
      for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        const title = item.title[0];
        // Shorten title for preview
        const shortTitle = title.substr(0, 50);
        const pic = item.galleryURL[0];
        const price = item.sellingStatus[0].currentPrice[0].__value__;
        const devise = item.sellingStatus[0].currentPrice[0]["@currencyId"];
        const viewitem = item.viewItemURL[0];
        if (null != title && null != viewitem) {
          const newRecord = {
            pic: pic,
            title: title,
            shortTitle: shortTitle,
            price: price,
            devise: devise,
            viewitem: viewitem
          }
          html.push(newRecord);
        }
      }
	  // Stock the newRecords into the state
      this.setState({newRecords: html});
    }; // End _cb_findItemsByKeywords() function

    // Create a JavaScript array of the item filters you want to use in your request
    const filterNewRecords = [
      {
        "name": "Seller",
        "value": "licorne93150",
        "paramName": "",
        "paramValue": ""
      }
    ];

    buildURLArray(filterNewRecords);

    // Construct the request
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=PaulPour-TestEbay-PRD-6246ab013-f411aaa5";
    url += "&GLOBAL-ID=EBAY-FR";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&REST-PAYLOAD";
    url += "&keywords=vinyl";
    url += "&sortOrder=StartTimeNewest";
    url += "&paginationInput.entriesPerPage=18";
    url += urlfilter;

    // Call eBay API by fetch
    return fetchJsonp(url).then(result => {
      return result.json();
    })
	.then(parsedResult => {
      _cb_lastRecords(parsedResult);
    })
	.catch(err => {
      console.log(err);
    });

} // End DidMount

  render() {
    // Create array containing all the records
    const newRecord = [];
    // Looping through the items
    this.state.newRecords.map(item => {
      newRecord.push(<Record pic={item.pic} shortTitle={item.shortTitle} price={item.price} devise={item.devise} viewitem={item.viewitem}/>);
    });
    return (
      <div className="NewRecords">
        <h3>Nos dernieres trouvailles :</h3>
        <div className="recordsContainer">
          {newRecord}
        </div>
      </div>
    )
  }
}

export default NewRecords;
