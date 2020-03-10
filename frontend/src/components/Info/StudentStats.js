import React, { Component } from "react"
import './StudentStats.css'

class StudentStats extends React.Component {
<<<<<<< HEAD
	
  state = { studentId: "Student ID", studentName: "Student Name", courseCode: "Course Code", courseName: "Course Name", 
	  grades: [ { id: 1, title: 'Quiz 1', mark: 10, max_mark: 10 }, { id: 2, title: 'Quiz 2', mark: 10, max_mark: 10 }, 
		  { id: 3, title: 'Assignment 1', mark: 20, max_mark: 20 }] }
   
  renderTable() {
      return this.state.grades.map((grade) => {
	 return (
            <tr key={ grade.id }>
               <td>{ grade.title }</td>
               <td>{ grade.mark }</td>
               <td>{ grade.max_mark }</td>
=======

   constructor(props) {
      super(props)       
	   this.state = { //state is by default an object
         students: [
            {title: 'In-Class Assignment 1', mark: 21, max_mark: 29 },
            {title: 'In-Class Assignment 2', mark: 19, max_mark: 29 },
            {title: 'Term Test', mark: 16, max_mark: 20 },
            {title: 'Final Project', mark: 25, max_mark: 30 }
         ],
         courseName: "CSC301 - Introduction to Software Engineering",
         studentName: "Davinder Jangra"
      }
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { title, mark, max_mark } = student //destructuring
         return (
            <tr key={title}>
               <td>{title}</td>
               <td>{mark}</td>
               <td>{max_mark}</td>
>>>>>>> 931733e31ed1f1b808b29a82d60d2decd4a42f75
            </tr>
         )
      })
   }

<<<<<<< HEAD
   handleClick = (e) => {
	   e.preventDefault();
	   console.log("Hey man stop pressing me");
   }

   render() {
      return (
=======
   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   render() {
      return (
         <div className="container">
            <h2 id='title'>{this.state.courseName}</h2>
            <h3 id='title'>Marks for {this.state.studentName}:</h3>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
>>>>>>> 931733e31ed1f1b808b29a82d60d2decd4a42f75

	   <div>
	      
	      <div>
	        <nav>
	         <button onClick = {this.handleClick}> Homepage </button>
	         <button> Courses </button>
	        </nav>
	      </div>

	      <div className = "center">
	        <div className = "left">
	         <h3 id='courseName' align="left"> { this.state.courseName } </h3>
	         <h4 id='courseCode' align="left"> { this.state.courseCode } </h4>
	        </div>

	        <div className = "right">
                 <h3 id='studentName' align="right"> { this.state.studentName } </h3>
	         <h4 id='StudentID' align="right"> { this.state.studentId } </h4>
	        </div>

	        <div className = "temp">
	    
	         <table id='students'>
	          <thead>
	            <tr> 
	      	       <th> Assesment </th>
	      	       <th> Grade </th>
	      	       <th> Max Grade </th>
	            </tr> 
	           </thead>
	      
	           <tbody> 
	             { this.renderTable() } 
	           </tbody>
            
	         </table>
	    
	        </div>

	      </div>
	  
	   </div>
      )
   } 
}

export default StudentStats
