import React, { Component } from 'react';

class DoneFrame extends Component{
	render(){
		return(
			<div className="col-xs-12 card-panel text-center done-frame">
				<h2>{this.props.doneStatus}</h2>
				<button className="btn btn-default" onClick={this.props.reset}>Play Again</button>

			</div>
		)
	}
}

export default DoneFrame;