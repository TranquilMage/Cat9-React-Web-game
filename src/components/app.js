import React from 'react';
import { Component } from 'react';


import { CountFrame, AnswerFrame, ButtonFrame, ChoiceBox } from './';

const clickNumber = (clickedNumber) => {
	this.setState(
		{selectedNumbers: this.props.selectedNumbers.concat(clickedNumber)}
	);
	console.log(clickedNumber)
	console.log(this.props.selectedNumbers)
}

const App = (props) => {


    return (
    	<div className="container">
	    	<div className="row">
	    		<CountFrame />
	    		<ButtonFrame />
	    		<AnswerFrame selectedNumbers={this.props.selectedNumbers} />
	    	</div>
    		<ChoiceBox
    			selectedNumbers={this.props.selectedNumbers}
    			clickNumber={clickNumber}/>
    	</div>
    )

}

export default App;
