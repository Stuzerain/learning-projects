import React from "react";
import Villagers from "./Villagers.js";

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { villagers: Villagers };
		this.handleSwitch = this.handleSwitch.bind(this);
	}

	// code used in vanilla js table
	// loadTableData(villagers) {
	// 	const tableBody = document.getElementById("tableData");
	// 	const tableHead = document.getElementById("tableHead");
	// 	let dataHtml = "";

	// 	for (let villager of villagers) {
	// 		dataHtml += `<tr>
	// 			<td>${villager.name}</td>
	// 			<td>${villager.species}</td>
	// 			<td>${villager.personality}</td>
	// 			<td>${villager.amiibo}</td>
	// 			<td><img src ="${villager.poster}" /></td>
	// 			<td><button class="addButton" onClick="">ADD</button></td>
	// 		</tr>`;
	// 	}

	// 	tableBody.innerHTML = dataHtml;
	// }

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
					/>
				);

			case 5:
				return <button className="addButton">ADD</button>;
		}
	}

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
							<th className="addButtonHead">Add?</th>
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
