import React, { Component } from "react"
import './StudentStats.css'

class StudentStats extends React.Component {
	
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
            </tr>
         )
      })
   }
 

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


   render() {
      return (
         <div> 
	    <div class = "center">
	    
	    <div class = "left">
            <h3 id='courseName' align="left"> { this.state.courseName } </h3>
	    <h4 id='courseCode' align="left"> { this.state.courseCode } </h4>
	    </div>

	    <div class = "right">
            <h3 id='studentName' align="right"> { this.state.studentName } </h3>
	    <h4 id='StudentID' align="right"> { this.state.studentId } </h4>
	    </div>

	    <div class = "temp">
	    <table id='students'>
               
	       <thead>
	          
	          <tr> 
	      	     <th> Assesment </th>
	      	     <th> Grade </th>
	      	     <th> Max Grade </th>
	          </tr>
                  
	       </thead>
	       
	       <tbody> { this.renderTable() } </tbody>
            
	    </table>
	    </div>

	    </div>

        </div>
      )
   } 

}

export default StudentStats
