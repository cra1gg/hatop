import React from "react"
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Navbar from '../Navigation/Navbar';
import axios from "axios";


class EnrolClass extends React.Component {

   constructor(props) {
      super(props)       
      this.state = { studentId: "Student ID", studentName: "Student Name", value: '', success: "", error: ""}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }
  
   handleSubmit(event) {
      event.preventDefault();
      if(localStorage.username == null) {
         this.setState({
            error: "You must be logged in to enroll into a class."
         })
         return;
      }
      const userCreds = {
         username: localStorage.username,
         value: this.state.value
		}
		axios.post(`http://localhost:3000/user/enrolclass`, userCreds)
			.then(res => {
				this.setState({
					success: res.data.success,
					error: ""	
				})

			}, (error) => {
				this.setState({
					error: error.response.data.error,
					success: ""
				})
			});
   }

   

   render() {
      return (
         <div>
				<Navbar isLogged={true}/>
         <div className="container">
            <h3> Enrol in a Course </h3> <hr/>
            <form onSubmit={this.handleSubmit}>
               <label>
               Course ID:
               
               <input list="courseId" label="tesadsfdsfdasfdsat" type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <p id="error" style={{color:'red'}}>{this.state.error}</p>
					<p id="success" style={{color:'green'}}>{this.state.success}</p>
               <input type="submit" class="btn btn-primary btn-lg btn-block active" value="Submit" />

            </form>
        </div>
        </div>
      )
   } 


}

export default EnrolClass
