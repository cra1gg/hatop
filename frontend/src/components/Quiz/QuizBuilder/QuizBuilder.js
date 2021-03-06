import React, { Component } from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Questions from './Questions';
import QuestionAdder from './QuestionAdder';
import Navbar from './../../Navigation/Navbar'
import axios from "axios"

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import { palette } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import { createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

class QuizBuilder extends Component {

	// const classes = useStyles();

	// Quiz will be a set of questions
	// Each question will have a 'question', 'answer' and 'type'
	// type will be either T/F or MC (for now)
	state = { lastid: 0, name: '', questions: [], error: '', success: '', courses: [], selectedCourse: '' }

	 dropdownStyle = {
		'font-size': '17px',
		'padding' : '8px',
		'width': '150px'
	  };

	componentDidMount() {
		if (localStorage.user_type !== "instructor") {		// ONLY ALLOW TEACHERS TO CREATE A QUIZ
			this.setState({
				error: "You can't create a quiz as you're not an instructor.",
				success: ""
			})
			return;
		}

		console.log(this.state);
		axios.get("http://localhost:3000/user/" + localStorage.username)
			.then(res => {
				this.setState({
					courses: res.data.classes,
					error: ""
				})
				console.log("Your courses: " + this.state.courses);
			}, (err) => {
				console.log(err);
				this.setState({
					error: "Couldn't retrieve your courses.",
					success: ""
				})
			});

	}

	addQuestion = (question) => {

		const lastid = this.state.lastid + 1;
		question.id = lastid;

		const questions = [...this.state.questions, question];
		this.setState({
			questions,
			lastid
		});

	}

	removeQuestion = (id) => {

		console.log(id)
		const questions = this.state.questions.filter(question => {
			return question.id !== id
		})
		this.setState({
			questions
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const quiz = {
			courseCode: this.state.selectedCourse,
			name: this.state.name,
			questions: this.state.questions,
		}
		console.log(this.state);
		axios.put(`http://localhost:3000/quiz`, quiz)
			.then(res => {
				this.setState({
					success: res.data.success,
					error: ""
				})
			}, (err) => {
				console.log(err);
				this.setState({
					error: "Couldn't add the quiz.",
					success: ""
				})
			});

		this.setState({
			lastid: 0,
			name: '',
			questions: [],
			error: '',
			success: '',
			courses: [],
			selectedCourse: ''
		});

	}

	handleNameChange = (event) => {
		const { id, value } = event.target
		this.setState({
			[id]: value
		})

	}
	handleCourseChange = (event) => {
		console.log("clicked this " + event.target.value);
		this.setState({
			selectedCourse: event.target.value

		})
	}
	render() {
		return (
			<div>
				<Navbar isLogged={false} />
				
			        <div className="container">
			                
			                <div className="collection">
			                  
			                  <h4 className="collection-item">
			                    Quiz Builder
					  </h4>

					  <div className="collection-item">
						<div className="row">

							<div className="container col s4">
								<button className="btn-medium waves-effect" color="default" onClick={this.handleSubmit}> Create Quiz <PostAddIcon /> </button>
								<p id="error" style={{ color: 'red' }}>{this.state.error}</p>
								<p id="success" style={{ color: 'green' }}>{this.state.success}</p>
							</div>


							<div className="col s2">

							{/* Dropdown for courses */}
							<InputLabel style={this.dropdownStyle}>Course</InputLabel>
							<Select
							value = {this.state.selectedCourse}
							onChange={this.handleCourseChange}
							style = {this.dropdownStyle}
							>
							{this.state.courses.map(course => (
								<MenuItem value={course}>{course}</MenuItem>
							))}

							</Select>
				
							</div>

							<div className="col s1"> </div>

							<div className="post card col s5 center">
								<input className="card-content" id="name" type="text" placeholder="Quiz name..." onChange={this.handleNameChange} required />
							</div>

						</div>
					  </div>

				
			                <h6 className="collection-item"> Add Questions </h6>
					
			                <div className="collection-item">                
			                     <QuestionAdder addQuestion={this.addQuestion} />
					</div>


					<h6 className="collection-item"> Quiz Questions </h6>
					<div className="collection-item">

						<Questions questions={this.state.questions} removeQuestion={this.removeQuestion} />

					</div>
			                
			                </div>

				</div>
			</div>
		)
	}
}

export default QuizBuilder;
