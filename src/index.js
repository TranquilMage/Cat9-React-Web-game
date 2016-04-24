import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { CountFrame, AnswerFrame, ButtonFrame, ChoiceBox }  from './components/';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			selectedNumbers:[],
			usedNumbers:[],
			countInBox: Math.floor(Math.random()*9) + 1,
			correct: null
		};
	}



  render() {
	const clickNumber = (clickedNumber) => {
		var values = this.state.selectedNumbers.concat(clickedNumber)
		this.setState(
			{
				selectedNumbers: values,
				correct: null
			}
		);
	}

	const unclickNumber = (clickedNumber) => {
		var selectedNumbers = this.state.selectedNumbers
		var indexOfNumber = selectedNumbers.indexOf(clickedNumber)
		selectedNumbers.splice(indexOfNumber, 1)
		this.setState(
			{
				selectedNumbers: selectedNumbers,
				correct: null
			}
		);
	}

	const checkAnswer = () => {
		var sumOfSelectedAnswers = this.state.selectedNumbers.reduce((p, n) => {
			return p+n;
		}, 0)

		var correct = this.state.countInBox === sumOfSelectedAnswers;
		this.setState({correct: correct})
	}
	const redraw = () => {
		this.setState({
			countInBox: Math.floor(Math.random()*9) + 1,
			selectedNumbers:[],
			correct: null
		})
	}
	const acceptAnswer = () => {
		var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({
			selectedNumbers : [],
			usedNumbers : usedNumbers,
			correct: null,
			countInBox: Math.floor(Math.random()*9) + 1,
		})
	}

    return (
    	<div>
	    	<div className="row">
	    		<CountFrame
	    		  countInBox={this.state.countInBox}/>
	    		<ButtonFrame
	    		  selectedNumbers={this.state.selectedNumbers}
	    		  correct={this.state.correct}
	    		  acceptAnswer={acceptAnswer}
	    		  redraw={redraw}
	    		  checkAnswer={checkAnswer}/>
	    		<AnswerFrame
	    		  selectedNumbers={this.state.selectedNumbers}
	    		  unclickNumber={unclickNumber}/>
	    	</div>
    		<ChoiceBox
    		  selectedNumbers={this.state.selectedNumbers}
    		  usedNumbers={this.state.usedNumbers}
    		  clickNumber={clickNumber}/>
    	</div>
    )
  }

}
ReactDOM.render(
    <App />
  , document.querySelector('.container'));
