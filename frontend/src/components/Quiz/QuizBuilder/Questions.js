import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Questions = ({questions, removeQuestion}) => {

	const questionList = questions.length ? (
		questions.map(question => {
			return (
				<div className="collection-item" key={question.id}>
				 <div className="row">
				  <div className="col s1">
				   <h6 className="center black-text"> {question.id} </h6>
				  </div>

				  <div className="col s2">
				   <p className="center black-text"> {question.type} </p>
				  </div>
				
				  <div className="col s4">
				   <p className="center black-text"> {question.content} </p>
				  </div>
				  
				  <div className="col s4">
				   <p className="center black-text"> {question.answer}</p>
				  </div>

				  <div className="col s1">
				   <IconButton aria-label="delete" color="default" onClick={() => {removeQuestion(question.id)}}> <CloseIcon/> </IconButton>
				  </div>

				 </div>
				</div>
			)
		})
	) : (
		<p className="center black-text"> There are no questions. </p>
	)

	return (
		<div> 

		 <div className="collection-item">
			 <div className="row">
			  <div className="col s1">
			   <h6 className="center black-text"> # </h6>
			  </div>
		
		          <div className="col s2">
			   <p className="center black-text"> Type  </p>
			  </div>

			  <div className="col s4">
			   <p className="center black-text"> Question </p>
			  </div>
			  
			  <div className="col s4">
			   <p className="center black-text"> Answer </p>
			  </div>
		
		          <div className="col s1">
			  </div> 
		         </div>
	        </div>

		{ questionList } 
		
	       </div>
	)
}

export default Questions;
