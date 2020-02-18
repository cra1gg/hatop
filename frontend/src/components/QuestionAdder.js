import React, { Component } from 'react'

class QuestionAdder extends Component {

	state = {content: '', answer: '', type: ''}

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
			answer: '',
			type: ''
		});
	}

	render() {
		return (
			<div className="collection-item">
			 <form onSubmit={this.handleAdd}>
			 <div className="row">
			  
			  <div className="col s3"> 
			   <input id="content" type="text" placeholder="Question" onChange={this.handleChange} value={this.state.content}/>
		  	  </div>
			  
			  <div className="col s3">
			   <input id="answer" type="text" placeholder="Answer" onChange={this.handleChange} value={this.state.answer}/>
			  </div>

			  <div className="col s3">
			    <label>
			    <input type="radio" value={"True/False"} name={"type"} defaultChecked={true} disabled={false}/>
			    </label>    
			  </div>

			  <div className="center col s3">
			   <button type="submit" className="btn waves-effect waves-light"> Add Question </button>
			  </div>

			 </div>
			 </form>
			
			</div>
		)
	}
}

export default QuestionAdder;
