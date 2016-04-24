import _ from 'lodash';
import React, { Component } from 'react';



class CountFrame extends Component {
	constructor(props){
		super(props)
	}


	render(){

		var listIcons = (icons) => {
			var list = [];
			for (var i = 0; i < icons; i++) {
				list.push(<i key={i}className="fa fa-gitlab"></i>)
			};
			return list
		}

		return (
			<div className="col-xs-5 card-panel text-center count-frame">
				<h5 className="col-title text-center">Count</h5>
				<hr />
				{listIcons(this.props.countInBox)}
			</div>
		)
	}

}

export default CountFrame;

