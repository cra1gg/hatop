import React, { Component } from 'react';
import Navbar from "./../../Navigation/Navbar";
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';

class QuizTaker extends Component {

	state = {quiz_id: 34343, quiz_name: "THE FIRST QUIZ", questions: [{id: 0, content: "THIS IS THE QUESTION", answer: "ANSWER?", choices: ["a", "b", "c"]}]}

	handleChange = (e) => {

		e.preventDefault();
		// Need to keep track of the answers
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
				<div className="post card">
				   
				   <h4 className="grey-text"> {question.content} </h4>
				
				   <FormControl component="fieldset">
				   
				    <FormLabel component="legend"> Options </FormLabel>

				    <RadioGroup defaultValue={null} name="customized-radios">
			              {choices}
				    </RadioGroup>			 
				   
				   </FormControl>

				</div>
			)
		});

		return (

			<div>

			   <Navbar isLogged={false} />

			   <div className="container">
			    
			     <h2 className="post card"> {this.state.quiz_name} </h2>

			     {questionList}

			   </div>

			</div>

		);
	}


}

export default QuizTaker;
