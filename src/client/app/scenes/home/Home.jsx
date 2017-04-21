import React from 'react';
import {render} from 'react-dom';
import Header from './../../components/header/Header.jsx';
import NewRecords from './../../components/newRecords/NewRecords.jsx';
import Description from '../../components/description/Description.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Contact from '../../components/contact/Contact.jsx';
import SearchResults from '../../components/searchResults/SearchResults.jsx';

class Home extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
        searchResults: []
      };
  };

  // ecordSearch = () => {
  //     let urlfilter = "";
  //     // Generates an indexed URL snippet from the array of item filters
  //     function buildURLArray() {
  //       // Iterate through each filter in the array
  //       for (var i = 0; i < filterSearch.length; i++) {
  //         //Index each item filter in filterSearch
  //         var itemfilter = filterSearch[i];
  //         // Iterate through each parameter in each item filter
  //         for (var index in itemfilter) {
  //           // Check to see if the paramter has a value (some don't)
  //           if (itemfilter[index] !== "") {
  //             if (itemfilter[index]instanceof Array) {
  //               for (var r = 0; r < itemfilter[index].length; r++) {
  //                 var value = itemfilter[index][r];
  //                 urlfilter += "&itemFilter\(" + i + "\)." + index + "\(" + r + "\)=" + value;
  //               }
  //             } else {
  //               urlfilter += "&itemFilter\(" + i + "\)." + index + "=" + itemfilter[index];
  //             }
  //           }
  //         }
  //       }
  //     }; // End buildURLArray() function
  //
  //     // Set callback function
  //     const _cb_lastRecords = (root) => {
  //       let items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  //       const html = [];
  //       for (let i = 0; i < items.length; ++i) {
  //         const item = items[i];
  //         const title = item.title[0];
  //         // Shorten title for preview
  //         const shortTitle = title.substr(0, 50);
  //         const pic = item.galleryURL[0];
  //         const price = item.sellingStatus[0].currentPrice[0].__value__;
  //         const devise = item.sellingStatus[0].currentPrice[0]["@currencyId"];
  //         const viewitem = item.viewItemURL[0];
  //         if (null != title && null != viewitem) {
  //           const newRecord = {
  //             pic: pic,
  //             title: title,
  //             shortTitle: shortTitle,
  //             price: price,
  //             devise: devise,
  //             viewitem: viewitem
  //           }
  //           html.push(newRecord);
  //         }
  //       }
  // 	  // Stock the newRecords into the state
  //       this.setState({newRecords: html});
  //     }; // End _cb_findItemsByKeywords() function
  //
  //     // Create a JavaScript array of the item filters you want to use in your request
  //     const filterSearch = [
  //       {
  //         "name": "Seller",
  //         "value": "licorne93150",
  //         "paramName": "",
  //         "paramValue": ""
  //       }
  //     ];
  //
  //     buildURLArray(filterSearch);
  //
  //     // Construct the request
  //     var url = "http://svcs.ebay.com/services/search/FindingService/v1";
  //     url += "?OPERATION-NAME=findItemsByKeywords";
  //     url += "&SERVICE-VERSION=1.0.0";
  //     url += "&SECURITY-APPNAME=PaulPour-TestEbay-PRD-6246ab013-f411aaa5";
  //     url += "&GLOBAL-ID=EBAY-FR";
  //     url += "&RESPONSE-DATA-FORMAT=JSON";
  //     url += "&REST-PAYLOAD";
  //     url += "&keywords=vinyl";
  //     url += "&sortOrder=StartTimeNewest";
  //     url += "&paginationInput.entriesPerPage=18";
  //     url += urlfilter;
  //
  //     // Call eBay API by fetch
  //     return fetchJsonp(url).then(result => {
  //       return result.json();
  //     })
  // 	.then(parsedResult => {
  //       _cb_lastRecords(parsedResult);
  //     })
  // 	.catch(err => {
  //       console.log(err);
  //     });
  //
  // } // End of componentWillMount


  render() {
    return (
      <div className="Home">
        <Header />
		<SearchResults/>
        <NewRecords/>
		<Description />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home;
