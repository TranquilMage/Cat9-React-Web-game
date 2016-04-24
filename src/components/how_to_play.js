import React from 'react';


const HowToPlay = ({redraws}) => {

	const button = (
				<button className='btn btn-primary btn-xs'>=</button>
			);

	const goodButton = (
				<button className='btn btn-success btn-xs'><i className="fa fa-check"></i></button>
			);
	const badButton = (
				<button className='btn btn-danger btn-xs'><i className="fa fa-times"></i></button>
			);
	const redrawbutton = (
						<button
						  className="btn btn-warning btn-xs">
							<i className="fa fa-refresh"> {redraws} </i>
						</button>
			);
	return(
    	<div className="container">
	 		<div id="modal1" className="modal bottom-sheet">

	            <div className="modal-content">
	                <h4 className="text-center">How To Play CAT9</h4>
	                <div className="container-fluid">
	                    <ul className="collection">
	                        <li className="collection-item avatar">
	                            <i className="material-icons circle fa fa-gitlab"></i>
	                            <span className="title">Count The Cats</span>
	                            <p>Select the best options from the choice panel to represent the total displayed in the Count panel 
	                            <br /> After you select the number that represent the total in the count box, click the equals button {button}
	                            <br /> if the Choices you ...choose are correct the button will turn green {goodButton}
	                            <br /> if your Choices are incorrect the button will turn red {badButton}
	                            </p>
	                        </li>
	                        <li className="collection-item avatar">
	                            <i className="material-icons circle fa fa-check green"></i>
	                            <span className="title">Saving Answers</span>
	                            <p>Click the {goodButton} again to save your Answers
	                            </p>
	                        </li>
	                        <li className="collection-item avatar">
	                            <i className="material-icons circle fa fa-refresh orange"></i>
	                            <span className="title">Redraws</span>
	                            <p>Click the redraw button {redrawbutton} to reset
	                                <br /> You are allowed redraw the total number of cats {redraws} more times before it is "Game Over"
	                            </p>
	                        </li>
	                        <li>
	                        </li>
	                    </ul>
	                </div>
		            <div className="modal-footer">
		                <a href="#!" data-dismiss="modal1" className="btn btn-danger btn-xs modal-action modal-close">Close</a>

		            </div>
	            </div>
	        </div>
       </div>
	)
}

export default HowToPlay;