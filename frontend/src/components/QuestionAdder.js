import React, { Component } from 'react'
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import MultipleChoiceAdder from './MultipleChoiceAdder';

class QuestionAdder extends Component {

	state = {content: '', answer: '', type: '', choices : [{id: 0, value: 'a'}, {id: 1, value: 'b'}]}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	
	handleAdd = (e) => {
		e.preventDefault();
		this.props.addQuestion(this.state);
		this.setState({
			content: '',
			answer: ''
		});
	}

	render() {
		const typeval = this.state.type === "";
		let responses;


		if (typeval) {
			responses = (<div> </div>)
		} else {
			responses = this.state.type === "True/False" ? 
			( <FormControl component="fieldset">
			     <FormLabel component="legend"> Options </FormLabel>
			     <RadioGroup defaultValue="" name="customized-radios">
				    <FormControlLabel value="True" control = {<Radio id="answer" onChange={this.handleChange} />} label="True" />
				    <FormControlLabel value="False" control = {<Radio id="answer" onChange={this.handleChange}/>} label="False" />
		             </RadioGroup>
		          </FormControl>
			  ) : 
			(
			 <MultipleChoiceAdder handleChange={this.handleChange}/>
			)

		}
		
		const answers = this.state.type === "True/False" ?
			(
			   <h5 id={this.state.answer}> {this.state.answer} </h5>
			) : (
			   <h5 id={this.state.answer}> {this.state.answer} </h5>
			)

		return (
			<div className="collection-item">
			 <form onSubmit={this.handleAdd}>
			 <div className="row">
			  
			  <div className="col s8"> 
			   <input id="content" type="text" placeholder="Question" onChange={this.handleChange} value={this.state.content}/>
		  	  </div>
			  
		          <div className="center col s4">
			   <button type="submit" className="btn waves-effect waves-light"> Add Question </button>
			  </div>

			 </div>
			 
			 <div className="row">

			  <div className="col s4">
			   <FormControl component="fieldset">
			   <FormLabel component="legend"> Type </FormLabel>
			    <RadioGroup name="customized-radios">
				    <FormControlLabel value="True/False" control = {<Radio id="type" onChange={this.handleChange}/>} label="True/False" />
				    <FormControlLabel value="Multiple Choice" control = {<Radio id="type" onChange={this.handleChange}/>}label="Multiple Choice" />
		            </RadioGroup>
		           </FormControl>
			  </div>

			<div className="col s4">
			  { responses } 
			</div>
			  
			 <div className="col s4">
			  <h5 className="center"> Answer { answers } </h5>
			 </div>

			 </div>
			 </form>
			
			</div>
		)
	}
}

export default QuestionAdder;
