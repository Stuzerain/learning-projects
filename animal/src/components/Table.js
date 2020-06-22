import React from "react";
import Villagers from "./Villagers.js";
import { Button } from "./Button.jsx";

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			villagers: Villagers,
			likeClicked: false,
			dislikeClicked: false,
		};
		this.handleSwitch = this.handleSwitch.bind(this);
	}

	handleSwitch(col, num) {
		switch (col) {
			case 0:
				return `${this.state.villagers[num].name}`;
			case 1:
				return `${this.state.villagers[num].species}`;

			case 2:
				return `${this.state.villagers[num].personality}`;

			case 3:
				return `${this.state.villagers[num].amiibo}`;

			case 4:
				return (
					<img
						src={process.env.PUBLIC_URL + this.state.villagers[num].poster}
						alt={`A portrait of ${this.state.villagers[num].name}`}
					/>
				);

			/** TODO--each button created is the "same" button--so onClick events don't have the ability to recognize
				the villagers' rows, i.e. the buttons on Alice's row aren't able to change anything within the Alice object
				specifically, and therefore can't set Alice's "opinion" key to true, "liking" her. Additionally, since all
				buttons are the "same," conditional formatting has been a difficulty as using an onClick event to change a
				button is successful in that the button changes, but all buttons of that type change at the same time.
				Solution--constructor to make individual buttons on every row? Unsure how constructors play with React. */

			case 5:
				return (
					<div>
						<Button
							id={`like-${num}`}
							onClick={() => {
								this.setState({ opinion: !this.state.villagers[num].opinion });
								console.log(this.state.villagers[num].opinion);
							}}
							type="button"
							buttonStyle="btn--primary--solid"
							buttonSize="btn--medium"
						>
							Test like!
						</Button>
						<Button
							id="dislike"
							onClick={() => {
								this.setState((prevState) => {
									return {
										dislikeClicked: !prevState.dislikeClicked,
									};
								});
							}}
							type="button"
							buttonStyle={
								this.state.dislikeClicked
									? "btn--danger--solid"
									: "btn--danger--outline"
							}
							buttonSize="btn--medium"
						>
							Test dislike!
						</Button>
						{this.state.villagers[num].liked ? "Liked!" : ""}
					</div>
				);
			default:
				return "Error--the number of rows and columns are not matching the villagers and their information";
		}
	}

	//onClick used to alternate between outline and solid, but currently affects every button when clicking a single one
	// onClick={() => {
	// 	this.setState((prevState) => {
	// 		return {
	// 			likeClicked: !prevState.likeClicked,
	// 		};
	// 	});
	// }}

	render() {
		let rows = [];
		for (var i = 0; i < this.state.villagers.length; i++) {
			let rowID = `row${i}`;
			let cell = [];
			for (var idx = 0; idx < 6; idx++) {
				let cellID = `cell${i}-${idx}`;
				cell.push(
					<td key={cellID} id={cellID}>
						{this.handleSwitch(idx, i)}
					</td>
				);
			}
			rows.push(
				<tr key={i} id={rowID}>
					{cell}
				</tr>
			);
		}

		// TODO add button should add villager to separate array for viewing
		return (
			<div className="container">
				<table id="villagerTable">
					<thead id="tableHead">
						<tr>
							<th>Name</th>
							<th>Species</th>
							<th>Personality</th>
							<th>Amiibo</th>
							<th className="poster">Poster</th>
							<th className="addButtonHead">TEST</th>
						</tr>
					</thead>
					<tbody id="tableData">{rows}</tbody>
				</table>
			</div>
		);
	}

	//possible alternative to creating table
	// render() {
	// 	return (TableRow = ({ row }) => (
	// 		<tr>
	// 			<td key={row.name}>{row.name}</td>
	// 			<td key={row.species}>{row.species}</td>
	// 			<td key={row.personality}>{row.personality}</td>
	// 			<td key={row.amiibo}>{row.amiibo}</td>
	// 			<td key={row.poster}>{row.poster}</td>
	// 			<td key={button}>Button</td>
	// 		</tr>
	// 	));
	// }
}

export default Table;
