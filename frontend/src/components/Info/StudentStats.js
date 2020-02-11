import React from "react"


class StudentStats extends React.Component {

   constructor(props) {
      super(props)       
	   this.state = { studentName: "Student's Name", courseName: "CSC301 - Software Engineering", grades: [ { id: 1, title: 'Quiz 1', mark: 5, max_mark: 10 }, { id: 2, title: 'Quiz 2', mark: 5, max_mark: 10 }, { id: 3, title: 'Assignment 1', mark: 15, max_mark: 20 }]
      }
   }

   
   renderTable() {
      return this.state.grades.map((grade, index) => {
         const { id, title, mark, max_mark } = grade         
	    return (
            <tr key={id}>
               <td>{title}</td>
               <td>{mark}</td>
               <td>{max_mark}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'> { this.state.courseName } </h1>
            <table id='students' align='center'>
               <tbody>
	          <tr> <b>
	      	     <td> Type of Assesment </td>
	      	     <td> Grade </td>
	      	     <td> Max Grade </td>
	          </b> </tr>
                  { this.renderTable() }
               </tbody>
            </table>
         </div>
      )
   } 


}

export default StudentStats
