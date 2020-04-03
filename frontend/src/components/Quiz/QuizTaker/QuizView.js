import React, { Component } from 'react';
import Navbar from './../../Navigation/Navbar';
import { Link } from 'react-router-dom'; 
import axios from 'axios';


class QuizView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quizzes: []
		}
	}

	//state = {quizzes : [{id: 0, name: "CSC301 - Quiz 1 - Enterprise Design Patterns", amt: 4, date: "2017-09-09", time: 10}]} 

	componentDidMount() {

		axios.get('http://localhost:3000/quiz').then(res => {
			var quizzes = res.data;
			console.log(res.data);
			this.setState({quizzes});
		})

	}

	render() {

		const quizList = this.state.quizzes.map(quiz => { 
			return ( 
				<div className="post card" key={quiz._id}>
				  <div className="card-content">
				    <Link to={"/quizzes/" + quiz._id}>
				     <span className="black-text card-title"> {quiz.name} </span>
				    </Link>
				    <p> {"Amount of Questions:   " + quiz.questions.length + "   |  " + "Total Duration:   " + quiz.questions.length + "   minutes"} </p>
				</div>
				</div>
			) 
		}) 

		return ( 
		   <div>
		     <Navbar loggedIn={false}/>
		     
		     <div className="post card">
			<div className="card-content">
			  <span className="card-title"> <h5> Online Quizzes </h5> </span>
			</div>
		     </div>

		     <div className="container">
			{ quizList }

		     </div>

		   </div>
		)
	}


}

export default QuizView;
