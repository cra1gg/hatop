import React, { Component } from 'react'
import Navbar from './Navbar'
import Questions from './Questions'
import QuestionAdder from './QuestionAdder'

class QuizBuilder extends Component {

	// Quiz will be a set of questions
	// Each question will have a 'question', 'answer' and 'type'
	// type will be either T/F or MC (for now)
	

	// 
	state = { lastid: 0, name: '', questions: [{id: 0, content: 'How are you?', answer: 'good enough', type: 'True/False'}] }

	addQuestion = (question) => {

		const lastid = this.state.lastid + 1;
		question.id = lastid;

		const questions = [...this.state.questions, question];
		this.setState({
			questions,
			lastid
		});

	}

	render() {	
		return (
			<div>
			<Navbar />
			
			
			<div className="container">
			<h3> Quiz Builder </h3>
			 <div className="collection">
			  <div className="collection-item">
			   <div className="row">
			    <div className="col s3">
			      <input id="name" type="text" placeholder="Quiz name..."/>
			    </div>

			    <div className="col s6">
			    </div>


		            <div className="col s3">
			      <button type="reset"> Create Quiz </button>
			    </div>

			   </div>
			  </div>
			 </div>
			  
			 <div className="collection">
			   
			   <QuestionAdder addQuestion={this.addQuestion}/>
			 
			 </div>
			

			<h6> Questions </h6>
			<div className="collection">

			   <Questions questions={this.state.questions}/>
			 
			 </div>



			 </div>
			</div>
		)
	}
}

export default QuizBuilder;
