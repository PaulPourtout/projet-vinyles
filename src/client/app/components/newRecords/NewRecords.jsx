import React from 'react';
import {render} from 'react-dom';
import Record from './record/Record.jsx';
import fetchJsonp from 'fetch-jsonp';

class NewRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newRecords: []
    };
    console.log('hello le state' + this.state.newRecords);
  }

  componentDidMount() {
    console.log('hello records mount');

    var urlfilter = "";
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
      var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
	  var html = [];
      for (var i = 0; i < items.length; ++i) {
        var item = items[i];
        var title = item.title[0];
        // Shorten title for preview
        var shortTitle = title[0].substr(0, 50);
        var pic = item.galleryURL[0];
        var price = item.sellingStatus[0].currentPrice[0].__value__;
        var devise = item.sellingStatus[0].currentPrice[0]["@currencyId"];
        var viewitem = item.viewItemURL;
        if (null != title && null != viewitem) {
		//   html.push(`
		// 	<div class='new-record' style='background-image:url(${pic})'>
		// 		<div class="new-record-info">
		// 			<p>${shortTitle}...</p>
		// 			<p>${price} ${devise}</p>
		// 			<a target='_blank' href="${viewitem}">Acheter</a>
		// 		</div>
	 //  		</div>`);
	//  html.push(`<Record picture='${pic}' shortTitle='${shortTitle}' price='${price}' devise='${devise}' viewitem='${viewitem}'></Record>`);
			var newRecord = {
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
	  console.log(html);
	//   return html;
	this.setState({newRecords: html});
}; // End _cb_findItemsByKeywords() function

	// Create a JavaScript array of the item filters you want to use in your request
    var filterNewRecords = [
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

	const recordsContainer = document.querySelector(".recordsContainer");

// Generate all Records from state newRecords
	const generateRecords = (array, target) => {
		array.map(item => {
			const newItem = `<Record picture='${item.pic}' shortTitle='${item.shortTitle}' price='${item.price}' devise='${item.devise}' viewitem='${item.viewitem}'></Record>`;
			console.log("target ", target);
			console.log(`newItem ${newItem}`);
			target.appendChild(newItem);
		});
	};


    // Call eBay API by fetch
    return fetchJsonp(url)
	.then(result => {
		return result.json();
	})
	.then(parsedResult => {
		_cb_lastRecords(parsedResult);
		console.log(this.state.newRecords);
		// generateRecords(this.state.newRecords, recordsContainer)
    })
	.catch(err => {
      console.log(err);
    });
	recordsContainer.appendChild('<p>coucou</p>');
} // End DidMount

  render() {
    return (
      <div className="NewRecords">
		<h3>Nos dernieres trouvailles :</h3>
		{/* <Record picture='url' shortTitle='coucou' price='${price}' devise='${devise}' viewitem='${viewitem}'></Record> */}
		<div className="recordsContainer">

		</div>
      </div>
    )
  }
}

export default NewRecords;
