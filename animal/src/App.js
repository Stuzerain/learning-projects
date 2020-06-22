import React from "react";
import Header from "./components/Header.js";
import Table from "./components/Table.js";
// import Body from "./components/Body.js";s

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Table />
				{/* <Body /> */}
			</div>
		);
	}
}

export default App;
