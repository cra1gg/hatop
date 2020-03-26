import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Questions from './Questions';
import QuestionAdder from './QuestionAdder';
import Navbar from './../../Navigation/Navbar'



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
			
			<Navbar isLogged={false}/>

			<div className="container">
			 <div className="collection-item">
			    <h4> Quiz Builder </h4>
			 </div>
			</div>


			<div className="container">
			 
			 <div className="collection">
			  <div className="collection-item">
			   <div className="row">
			
			    <div className="container col s4">
			      <button className="btn-medium waves-effect" color="default"> Create Quiz <PostAddIcon/> </button>
			    </div>

			    <div className="col s2"> </div>

			    <div className="post card col s6 center">
			      <input className="card-content" id="name" type="text" placeholder="Quiz name..."/>
			    </div>
 
			   </div>
			  
			  </div>
			 </div>
			  
			 <h5> Add Questions </h5>
			 <div className="collection">
			   
			   <QuestionAdder addQuestion={this.addQuestion}/>
			 
			 </div>
			

			<h5> Questions </h5>
			<div className="collection">

			   <Questions questions={this.state.questions} removeQuestion={this.removeQuestion}/>
			 
			 </div>



			 </div>
			</div>
		)
	}
}

export default QuizBuilder;
