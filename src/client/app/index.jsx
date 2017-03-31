import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import Home from './scenes/home/Home.jsx';

class App extends React.Component {
	render() {
		return(
			<Home />
		);
	}
}

render (
	<App/>, document.getElementById('app')
)
