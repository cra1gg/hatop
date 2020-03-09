import React from "react"


class StudentStats extends React.Component {

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


}

export default StudentStats
