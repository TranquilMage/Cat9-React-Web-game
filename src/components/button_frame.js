import React, { Component } from 'react';

class ButtonFrame extends Component {
	constructor(props){
		super(props)
	}

	redrawClickHandler = () => {
		this.props.redraw()
	}
	onClickHandler = () => {
		this.props.checkAnswer()
	}

	successOnClickHandler = () => {
		this.props.acceptAnswer()
	}

	render(){
		var disabled;
		var correct = this.props.correct;
		var classes =``;
		var button;
		var buttonClass,icon;
		// switch(correct){
		// 	case true:
		// 		console.log(true);
		// 		button = (
		// 			<button className="btn btn-success btn-lg">
		// 				<i className="fa fa-check"></i>
		// 			</button>
		// 		);
		// 	case false:
		// 		console.log(false);
		// 		button = (
		// 			<button className="btn btn-danger btn-lg">
		// 				<i className="fa fa-times"></i>
		// 			</button>
		// 		)
		// 	default:
		// 		disabled = (this.props.selectedNumbers.length === 0)
		// 		button = (
		// 			<button className="btn btn-primary btn-lg" disabled={disabled}
		// 				onClick={this.onClickHandler.bind(this)}>=</button>
		// 		)
		// }
		if(correct && correct !== null){
			buttonClass ="btn-success";
			classes =`btn ${buttonClass} btn-lg`
			icon = (<i className="fa fa-check"></i>)

			button = (
				<button className={classes} disabled={disabled}
					onClick={this.successOnClickHandler.bind(this)}>{icon}</button>
				);

		}else if(correct === false){
			buttonClass ="btn-danger";
			classes =`btn ${buttonClass} btn-lg`
			icon = (<i className="fa fa-times"></i>)
				button = (
					<button className={classes} disabled={disabled}
						onClick={this.onClickHandler.bind(this)}>{icon}</button>
				);
		}else if(correct === null){
			buttonClass ="btn-primary";
			classes =`btn ${buttonClass} btn-lg`
			icon = (<i>=</i>)
			button = (
				<button className={classes} disabled={disabled}
					onClick={this.onClickHandler.bind(this)}>{icon}</button>
			);
		}
		disabled = (this.props.selectedNumbers.length === 0)


		return(
			<div id="button-frame" className="col-xs-1 container">
					{button}
					<button
					  className="btn btn-warning btn-xs"
					  disabled={this.props.redraws <= 0 ? ' disabled' : ''}
					  onClick={this.redrawClickHandler.bind(this)} >
						<i className="fa fa-refresh"> {this.props.redraws} </i>
					</button>
			</div>
		)
	}

}

export default ButtonFrame;

