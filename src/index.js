import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { CountFrame, AnswerFrame, ButtonFrame, ChoiceBox, DoneFrame, HowToPlay }  from './components/';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
	constructor (props) {
		super(props)

		let bottomFrame;

		this.state = {
			selectedNumbers:[],
			usedNumbers:[],
			redraws: 5,
			countInBox: Math.floor(Math.random()*9) + 1,
			correct: null,
			doneStatus: null
		};
		this.initalState = this.state;


	}
	possibleCombinationSum = (arr, n) => {
		if (arr.indexOf(n) >= 0) { return true; }
		if (arr[0] > n) { return false; }
		if (arr[arr.length - 1] > n) {
			arr.pop();
			return this.possibleCombinationSum(arr, n);
		}
		var listSize = arr.length, combinationsCount = (1 << listSize)
		for (var i = 1; i < combinationsCount ; i++ ) {
			var combinationSum = 0;
		for (var j=0 ; j < listSize ; j++) {
		  if (i & (1 << j)) { combinationSum += arr[j]; }
		}
		if (n === combinationSum) { return true; }
		}
		return false;
	};



	possibleSolutions = () => {

		var possibleNumbers = [];

		for (var i = 1; i <= 9; i++) {
			if(this.state.usedNumbers.indexOf(i) < 0){
				possibleNumbers.push(i)
			}
		};

		return this.possibleCombinationSum(possibleNumbers, this.state.countInBox);

	}
	updateDoneStatus = () => {
		if(this.state.usedNumbers.length === 9){
			console.log("winner")
			this.setState({ doneStatus: "You Won! Good Job!"});
			return;
		}
		if(this.state.redraws === 0 && !this.possibleSolutions()){
			console.log("loser")
			this.setState({ doneStatus: "Game Over"});
			return;
		}
	}

	reset = () =>{
		this.setState(this.initalState)
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
		const callback = () =>{
			{this.updateDoneStatus()}
		}
		if (this.state.redraws >= 0) {
			this.setState({
				countInBox: Math.floor(Math.random()*9) + 1,
				selectedNumbers:[],
				correct: null,
				redraws: this.state.redraws - 1

			}, callback)
		};
	}
	const acceptAnswer = () => {
		var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({
			selectedNumbers : [],
			usedNumbers : usedNumbers,
			correct: null,
			countInBox: Math.floor(Math.random()*9) + 1,
		}, function() {
			{this.updateDoneStatus()}
		});
	}

	if (!this.state.doneStatus) {
		this.bottomFrame = <ChoiceBox
				    		  selectedNumbers={this.state.selectedNumbers}
				    		  usedNumbers={this.state.usedNumbers}
				    		  clickNumber={clickNumber}/>
	} else {
		console.log("done")
			this.bottomFrame = <DoneFrame
				doneStatus={this.state.doneStatus}
				reset={this.reset}/>
		}
    return (
    	<div className="container-fluid">
    		<section className="no-margin">
                <div className="row">
                    <div className="view overlay hm-blue-slight z-depth-2">
                        <a><img style={{ width: '100%' }}src="/imgs/cat9.png" className="img-responsive" />
                            <div className="mask waves-effect waves-light"></div>
                        </a>
                    </div>
	        			<button type="button" className="waves-effect waves-light btn btn-default btn-sm modal-trigger" href="#modal1">How to Play</button>
	        			<button type="button" className="waves-effect waves-light btn btn-primary btn-sm modal-trigger" href="https://github.com/TranquilMage/Cat9-React-Web-game">View Code</button>
	        			<button type="button" className="waves-effect waves-light btn btn-danger btn-sm modal-trigger" href="http://www.obstolumtriggs.com/">About Me</button>

                </div>
            </section>
            <div className="card-panel">
		    	<div className="row">
		    		<CountFrame
		    		  countInBox={this.state.countInBox}/>
		    		<ButtonFrame
		    		  selectedNumbers={this.state.selectedNumbers}
		    		  correct={this.state.correct}
		    		  acceptAnswer={acceptAnswer}
		    		  redraw={redraw}
		    		  redraws={this.state.redraws}
		    		  checkAnswer={checkAnswer}/>
		    		<AnswerFrame
		    		  selectedNumbers={this.state.selectedNumbers}
		    		  unclickNumber={unclickNumber}/>
		    	</div>
		    	{this.bottomFrame}

	        	<HowToPlay redraws={this.state.redraws}/>
    		</div>
    	</div>
    )
  }

}
ReactDOM.render(
    <App />
  , document.querySelector('.container'));
