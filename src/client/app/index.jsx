import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import 'normalize.css';
import Home from './scenes/home/Home.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Home/>
			</div>

		)
	}
}

render (
	<AppContainer>
		<App/>
	</AppContainer>,
	document.getElementById('app')
)
