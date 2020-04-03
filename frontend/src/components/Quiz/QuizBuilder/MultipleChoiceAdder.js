import React, { Component } from 'react'
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CloseIcon from '@material-ui/icons/Close';

class MultipleChoiceAdder extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lastid: 0,
			answer: "",
			options: [],
			newOption: ""
		}
	
	}

	addOption = (e) => {

		e.preventDefault();
		const lastid = this.state.lastid + 1;
		const option = {id: lastid, value: this.state.newOption};
		const options = [...this.state.options, option];

		this.setState({
			options,
			lastid,
			newOption: ''
		});

	}

	removeOption = (id) => {

		const options = this.state.options.filter(option => {
			return option.id !== id
		});

		this.setState({
			options
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		});
	}

	render() {

		const options = this.state.options.map(option => {
			return (
			<div className="row">
			 <div className="col s8">
			  <FormControlLabel value={option.value} control = {<Radio id="answer" onChange={this.props.handleChange}/>} label={option.value}/> 
			 </div>
			 <div className="col s2">
			   <IconButton color="default" size="small" onClick= {() => {this.removeOption(option.id)}}> <CloseIcon/> </IconButton> 
			 </div>
			</div>
			);
		})

		return (<div> 
			<FormControl component="fieldset">
			<FormLabel component="legend"> Options </FormLabel>

			 <RadioGroup defaultValue={null} name="customized-radios">
			  { options } 
			 </RadioGroup>			 
			 <input id="newOption" type="text" onChange={this.handleChange} value={this.state.newOption}/>
			 <IconButton color="default" size="small" onClick={this.addOption}> Add option... </IconButton>	
			</FormControl>
			</div>)

	}
}

export default MultipleChoiceAdder;
