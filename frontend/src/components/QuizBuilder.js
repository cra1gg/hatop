import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Questions from './Questions';
import QuestionAdder from './QuestionAdder';

class QuizBuilder extends Component {

	// Quiz will be a set of questions
	// Each question will have a 'question', 'answer' and 'type'
	// type will be either T/F or MC (for now)
	

	// 
	state = { lastid: 0, name: '', questions: [] }

	addQuestion = (question) => {

		const lastid = this.state.lastid + 1;
		question.id = lastid;

		const questions = [...this.state.questions, question];
		this.setState({
			questions,
			lastid
		});

	}

	removeQuestion = (id) => {

		console.log(id)
		const questions = this.state.questions.filter(question => {
			return question.id !== id
		})
		this.setState({
		questions
		})
	}

	render() {	
		return (
			<div>	
			
			<div className="container">
			<h3> Quiz Builder </h3>
			 
			 <div className="collection">
			  <div className="collection-item">
			   <div className="row">
			    
			    <div className="col s3">
			      <IconButton aria-label="add an alarm" color="default"> <p> Create Quiz <PostAddIcon/> </p> </IconButton>
			    </div>

			    <div className="col s6"> </div>

			    <div className="col s3">
			      <input id="name" type="text" placeholder="Quiz name..."/>
			    </div>
 
			   </div>
			  
			  </div>
			 </div>
			  
			 <div className="collection">
			   
			   <QuestionAdder addQuestion={this.addQuestion}/>
			 
			 </div>
			

			<h6> Questions </h6>
			<div className="collection">

			   <Questions questions={this.state.questions} removeQuestion={this.removeQuestion}/>
			 
			 </div>



			 </div>
			</div>
		)
	}
}

export default QuizBuilder;
