import React from "react"


class EnrolClass extends React.Component {

   constructor(props) {
      super(props)       
      this.state = { studentId: "Student ID", studentName: "Student Name", value: ''}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }
  
   handleSubmit(event) {
      alert('course ID: ' + this.state.value + ' was submitted!');
      event.preventDefault();
   }

   render() {
      return (
         <div>
            <h1> Enrol in a Course </h1> <hr/>
            <form onSubmit={this.handleSubmit}>
               <label>
               Course Id:
               <input list="courseId" type="text" value={this.state.value} onChange={this.handleChange} />
               <datalist id="courseId">
                  <option value="33443 - CSC301 Introduction to Software Engineering"/>
                  <option value="56456 - CSC309 Web Programming"/>
                  <option value="75667 - CSC209 Systems"/>
                  <option value="45645 - CSC343 Databases"/>
                  <option value="34224 - CSC347 Introduction to Information Security"/>
               </datalist>
               </label>
               <input type="submit" value="Submit" />
            </form>
        </div>
      )
   } 


}

export default EnrolClass
