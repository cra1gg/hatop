import React, { Component } from 'react';
import Navbar from "./../../Navigation/Navbar";
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import { withRouter } from 'react-router';
import axios from 'axios';

class QuizTaker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quiz_id: 0,
			quiz_name: '',
			course_code: '',
			questions: [],
			userAnswers: [],
			success: "",
			course_name: "",
			error: "",
			student_name: "",

		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const quiz_id = this.props.match.params.quiz_id;
		axios.get("http://localhost:3000/quiz/".concat(quiz_id)).then(res => {
			var quiz_name = res.data.name;
			var questions = res.data.questions;
			var course_code = res.data.courseCode;
			this.setState({quiz_id, quiz_name, questions, course_code});
		});
	}

	handleChange = (e) => {

		e.preventDefault();
		// Need to keep track of the answers
		this.state.userAnswers[e.target.id - 1] = {id: e.target.id - 1, value: e.target.value};


	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		if(localStorage.username == null) {
			this.setState({
			   error: "You must be logged in to view the quiz."
			})
			return;
		 }
		 var username = localStorage.username;

		 axios.get('http://localhost:3000/user/' + username)
		 .then(res => {
			 console.log(`First name: ${res.data.first_name}, last name : ${res.data.last_name}`)
			 this.setState({
				 student_name: res.data.first_name + ' ' + res.data.last_name ,
				 error: ""
			 })

			 axios.get('http://localhost:3000/classroom/' + this.state.course_code)
			 .then(res => {
				 console.log(`First name: ${res.data.name}`)
				 this.setState({
					 course_name: res.data.name,
					 error: ""
				 })
	
				const answeredAllQuestions = this.state.userAnswers.length === this.state.questions.length;

				if (answeredAllQuestions) {
		
					const tot = this.state.userAnswers.filter(ans => {
						const true_ans = this.state.questions[ans.id].answer
						return true_ans === ans.value; 
					})
		
					const usermark = {
						quiz_id: this.state.quiz_id,
						courseCode: this.state.course_code,
						mark: tot.length,
						max_mark: this.state.questions.length,
						title: this.state.quiz_name,
						student_id: username,
						name: this.state.student_name
					}
		
					console.log(usermark);
					axios.put('http://localhost:3000/quiz/submitQuiz', usermark)
						.then(res => {
							this.setState({
								success: res.data.success,
								error: ""
							})
							setTimeout(() => this.props.history.push("/quizzes"), 1000);
						}, (err) => {
							console.log(err);
							this.setState({
								error: "Failed to add the mark",
								success: ""
							})
						
						});
		
				} else {
		
					this.setState({error: "All questions must be answered"})
				
				}
			}, (err) => {
				console.log(err);
				this.setState({
					success: "",
					error: "Backend error please try again."
				})
			});
	 

		 }, (err) => {
			 console.log(err);
			 this.setState({
				 success: "",
				 error: "Backend error please try again."
			 })
		 
		 });


		//  localhost:3000/user/:user_id

		// Check that all questions were answered 
		// Send a post or put request to the database
		// containing the grade that the user got on the quiz
	}

	render() {

		const questionList = this.state.questions.map(question => {

			const choices = question.choices.map(choice => {

				return (

					<div className="center">
					 <FormControlLabel value={choice} control = {<Radio id={question.id} onChange={this.handleChange}/>} label={choice}/>
					</div>
				)

			});
			
			
		return (

			<div className="container">
			
			        <h6 className="grey-text"> {question.content} </h6> 

				<div className="post card">	   
				
				   <FormControl component="fieldset">
				   
				    <FormLabel component="legend"> </FormLabel>

				    <RadioGroup row={true} defaultValue={null} name="customized-radios">
			              {choices}
				    </RadioGroup>			 
				   
				   </FormControl>

				</div>
			</div>
			)
		});

		return (

			<div>

			   <Navbar isLogged={true} />

			   <div className="container">
			    
			     <h3 className="post card"> {this.state.quiz_name} </h3>

			     {questionList}
	
			   </div>

			   <div className="center container">
			   <form onSubmit={this.handleSubmit}>
               <input type="submit" class="btn large" value="Submit" />
				</form>

				<p id="error" style={{color:'red'}}>{this.state.error}</p>
				<p id="success" style={{color:'green'}}>{this.state.success}</p>
			   </div>
			</div>

		);
	}


}

export default withRouter(QuizTaker);
