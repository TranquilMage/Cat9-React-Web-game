import React, { Component } from 'react';

class AnswerFrame extends Component {
	constructor(props){
		super(props)
	}

	onButtonClick (number) {
		this.props.unclickNumber(number);
	}

	render(){
		return(
			<div className="col-xs-6 card-panel text-center answer-frame">
				<h5 className="col-title">Answer</h5>
				<hr />
				{this.props.selectedNumbers.map((i) => {
					return (
						<a
						 key={i}
						 className="btn-floating btn-large waves-effect waves-light gray"
						 onClick={this.onButtonClick.bind(this, i)}>
							<i className="material-icons">{i}</i>
						</a>
					)}
				)}
			</div>
		)
	}

}

export default AnswerFrame;

