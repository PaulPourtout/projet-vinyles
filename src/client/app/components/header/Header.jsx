import React from 'react';
import { render } from 'react-dom';
import './css/Header.scss';



class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
					<header>
						<h1 className="logo">
							Chez Philippe
						</h1>
					</header>
				<form action="">
					<input type="text" placeholder="ex: Jimi Hendrix"/>
					<input type="submit"/>
				</form>
			</div>
		)
	}
}

export default Header;
