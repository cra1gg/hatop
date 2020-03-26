import React, { Component } from 'react';
import Navbar from './../../Navigation/Navbar';
import { Link } from 'react-router-dom'; 


class QuizView extends Component {

	state = { quizzes : [{id: 0, name: "INSERT QUIZ NAME", amt: 5, date: "2017-09-09", time: 10}, 
		{id:1, name: "INSERT QUIZ NAME", amt: 5, date: "2020-12-29", time: 10}, 
		{id:2, name: "INSERT QUIZ NAME", amt: 17, date: "2021-01-01", time: 10},
		{id:3, name: "INSERT QUIZ NAME", amt: 17, date: "2021-01-01", time: 10},
		{id:4, name: "INSERT QUIZ NAME", amt: 17, date: "2021-01-01", time: 10},
		{id:5, name: "INSERT QUIZ NAME", amt: 17, date: "2021-01-01", time: 10},
		{id:6, name: "INSERT QUIZ NAME", amt: 17, date: "2021-01-01", time: 10}]}

	render() {

		const quizList = this.state.quizzes.map(quiz => { 
			return ( 
				<div className="post card" key={quiz.id}>
				  <div className="card-content">
				    <Link to={"/quizzes/" + quiz.id}>
				     <span className="card-title"> {quiz.name} </span>
				    </Link>
				    <p> {"Amount of Questions: " + quiz.amt + " | " + "Due Date: " + quiz.date + " | " + "Total Duration: " + quiz.time + " minutes"} </p>
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
