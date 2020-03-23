import React, { Component } from "react"
import './StudentStats.css'
import Navbar from '../../components/Navigation/Navbar';
import axios from "axios";

class StudentStats extends React.Component {
	
   state = { courses: [] }
         
   componentDidMount() {
      var instructor_id = "5e757ed4006b4a2ec4073d26"
      axios.get('http://localhost:3000/user/'.concat(instructor_id)).then(res => {
         var class_list = res.data.classes;  
         var courses = [];      
         var promises = [];
         for(var i = 0; i < class_list.length; i++){
            promises.push(
               axios.get('http://localhost:3000/classroom/'.concat(class_list[i])).then(res => {
                  courses.push({ course_name: res.data.name, course_code: res.data.course_code, grades: res.data.marks});
               })
            )
         }
         Promise.all(promises).then(() => this.setState({ courses: courses }))  
      })
   }
   
  renderTable() {
     return this.state.courses.map((course) => {
         return course.grades.map((grade) => {
            return (  
               <tr>
                  <td>{ course.course_code }</td>   
                  <td>{ course.course_name }</td> 
                  <td>{ grade.student_id }</td>   
                  <td>{ grade.student_name }</td>   
                  <td>{ grade.title }</td>
                  <td>{ grade.mark }</td>
                  <td>{ grade.max_mark }</td>
               </tr> 
            )
         })
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
				<Navbar isLogged={true}/>
            <div className="container">
	            <div class = "center">
	               <div class = "temp">
	                  <table id='students'>            
	                     <thead>
	                        <tr> 
                              <th> Course Code </th>
                              <th> Course Name </th>
                              <th> Student ID </th>
                              <th> Student Name </th>
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
         </div>
      )
   } 

}

export default StudentStats
