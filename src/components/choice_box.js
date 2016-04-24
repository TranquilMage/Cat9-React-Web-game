import _ from 'lodash';
import React, { Component } from 'react';



class ChoiceBox extends Component {
	constructor(props){
		super(props)
	}

	onButtonClick (number) {
		this.props.clickNumber(number);
	}

	listNumbers = (value) => {
		let list = [];
		let selectedNumbers = this.props.selectedNumbers;
		let usedNumbers = this.props.usedNumbers;
		var total = value;
		while(total > 1) {
			if(total < 0){debugger}
			let buttonStatus = selectedNumbers.indexOf(total-1)>=0 ? 'disabled red' : 'active blue';
			let answerStatus = usedNumbers.indexOf(total-1)>=0 ? 'disabled green' : '';
			let classes = `btn-floating btn-large ${buttonStatus} ${answerStatus}` ;

			list = list.concat({
				classes : classes,
				key : total - 1,


			})
			total = total-1;
		}

		return list;

		}
	render(){

		const numbers = this.listNumbers(10)
		const numberItems = numbers.map((number) => {
			return (
				<a key={number.key}
				  className={number.classes}
				  value={number.key}
				  onClick={this.onButtonClick.bind(this,number.key)}>
					<i className="material-icons">{number.key}</i>
				</a>
			)
		})

		return (
			<div className="card-panel col-xs-12">
				<h5 className="col-title">Choices</h5>
				<hr />
				{numberItems}
			</div>
		)
	}




}

export default ChoiceBox;


			// var list = [];
			// var selectedNumbers = this.props.selectedNumbers;
			// for (var i = 1; i < 10; i++) {
			// 	var buttonStatus = selectedNumbers.indexOf(i)>=0 ? 'disabled red' : 'active blue';
			// 	var classes = `btn-floating btn-large ${buttonStatus}` ;
			// 	var key = i
			// 	list[i] =
			// 		<a key={key + i}
			// 		  className={classes}
			// 		  value={key}
			// 		  onClick={event => this.onButtonClick({i})}>
			// 			<i className="material-icons">{i}</i>
			// 		</a>

			// };
			// return list
