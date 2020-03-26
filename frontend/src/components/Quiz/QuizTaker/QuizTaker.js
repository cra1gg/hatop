import React, { Component } from 'react';
import Navbar from "./../../Navigation/Navbar";
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';

class QuizTaker extends Component {

	state = {quiz_id: 0, quiz_name: "CSC301 - Quiz 1 - Enterprise Design Patterns", questions: [{id: 0, content: "Dependency Injection aims to separate the responsibility of resolving object dependency from its behaviour.", answer: "True", choices: ["True", "False"]}, {id: 1, content: "Interface segregation suggests that clients should be forced to depend on methods even if they do not use them.", answer: "False", choices:[" True", "False"]}, {content: "We would like to use client code which is currently incompatible with our application code. Which design pattern can fix this issue?", answer:"Adapter", choices: ["Adapter", "Factory", "Command"]}, {content: "Letting a class explicitly create an instance of another class can be solved by ...", answer: "Dependency Injection", choices: ["Dependency Injection Pattern", "Liskov Substitution Principle", "Interface Segregation Princliple"]}]}

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

			<div className="container">
			
			        <h6 className="grey-text"> {question.content} </h6> 

				<div className="post card">	   
				
				   <FormControl component="fieldset">
				   
				    <FormLabel component="legend"> </FormLabel>

				    <RadioGroup defaultValue={null} name="customized-radios">
			              {choices}
				    </RadioGroup>			 
				   
				   </FormControl>

				</div>
			</div>
			)
		});

		return (

			<div>

			   <Navbar isLogged={false} />

			   <div className="container">
			    
			     <h3 className="post card"> {this.state.quiz_name} </h3>

			     {questionList}
	
			   </div>

			   <div className="center container">
			     <button className="btn-large"> Submit </button>
			   </div>

			</div>

		);
	}


}

export default QuizTaker;
