import React, { Component } from 'react'
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import MultipleChoiceAdder from './MultipleChoiceAdder';

class QuestionAdder extends Component {

	constructor(props) {
		super(props);
		this.MCAdder = React.createRef();
		this.state = {
			content: '', 
			answer: '', 
			type: '', 
			choices : []
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	
	handleAdd = (e) => {
		e.preventDefault();
		
		if (this.state.type === "True/False") {

			this.state.choices = ["True", "False"];

		} else {
			
			const MCA = this.MCAdder.current;
			const values = MCA.state.options.map(option => {
				return option.value;
			});
			this.state.choices = values;

		}

		this.props.addQuestion(this.state);
			
		this.setState({
			content: '',
			answer: '',
			type: '',
			choices : []
		});	
	}

	render() {
		const typeval = this.state.type === "";
		let responses;


		if (typeval) {
			responses = (null)
		} else {
			responses = this.state.type === "True/False" ? 
			( <FormControl component="fieldset">
			     <FormLabel component="legend"> Options </FormLabel>
			     <RadioGroup defaultValue="" name="customized-radios">
				    <FormControlLabel value="True" control = {<Radio id="answer" onChange={this.handleChange}/>} label="True" />
				    <FormControlLabel value="False" control = {<Radio id="answer" onChange={this.handleChange}/>} label="False" />
		             </RadioGroup>
		          </FormControl>
			  ) : 
			(
			 <MultipleChoiceAdder id={"Multiple Choice"} ref={this.MCAdder} handleChange={this.handleChange}/>
			)

		}
		
		const answers = this.state.type === "True/False" ?
			(
			   <p className="center" id={this.state.answer}> {this.state.answer} </p>
			) : (
			   <p className="center" id={this.state.answer}> {this.state.answer} </p>
			)	

		return (
			<div className="collection-item">
			 
			 <form onSubmit={this.handleAdd}>
			 <div className="row">
			  
			  <div className="col s8"> 
			   <input id="content" type="text" placeholder="Question" onChange={this.handleChange} value={this.state.content} required/>
		  	  </div>

		          <div className="center col s4">
			   <button type="submit" className="btn-medium waves-effect waves-light"> Add Question </button>
			  </div>

			 </div>
			 
			 <div className="row">

			  <div className="col s4">
			   <FormControl component="fieldset">
			   <FormLabel component="legend"> Type </FormLabel>
			    <RadioGroup name="customized-radios">
				    <FormControlLabel value="True/False" control={<Radio id="type" onChange={this.handleChange}/>} label="True/False" />
				    <FormControlLabel value="Multiple Choice" control={<Radio id="type" onChange={this.handleChange}/>}label="Multiple Choice" />
		            </RadioGroup>
		           </FormControl>
			  </div>

			<div className="col s4">
			  { responses } 
			</div>
			  
			 <div className="col s4">
			  <div className="container">
			   <u> <p className="center text-grey"> Answer </p> </u> <p className="center"> { answers } </p>
			  </div>
			 </div>

			 </div>
			 </form>
			
			</div>
		)
	}
}

export default QuestionAdder;
