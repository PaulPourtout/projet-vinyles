import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';


class App extends React.Component {
	render() {
		return <p> Hello les vinyles de la mort qui tue avec sass</p>;
	}
}

render (
	<App/>, document.getElementById('app')
)
