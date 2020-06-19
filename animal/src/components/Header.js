import React from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						This is a test header. TODO--Add drop down navigation menu.
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							TODO
						</a>
					</p>
				</header>
			</div>
		);
	}
}

export default Header;
