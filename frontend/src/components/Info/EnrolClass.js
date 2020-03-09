import React from "react"
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


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
         <div className="container">
            <h3> Enrol in a Course </h3> <hr/>
            <form onSubmit={this.handleSubmit}>
               <label>
               Course ID:
               
               <input list="courseId" label="tesadsfdsfdasfdsat" type="text" value={this.state.value} onChange={this.handleChange} />
               </label>

               <br></br>
               <br></br>
               <label>
               Available Courses:
               </label>
               <br></br>
               <br></br>
               <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  //open={open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.value}
                  onChange={this.handleChange}
                  displayEmpty
                  input={<Input />}
                  renderValue={selected => {
                     if (selected.length === 0) {
                     return <div>Click here to see available courses.</div>;
                     }

                     return <div>Click here to see available courses.</div>;
                  }}
          
               >
                  <MenuItem value={33443}>33443 - CSC301 Introduction to Software Engineering</MenuItem>
                  <MenuItem value={56456}>56456 - CSC309 Web Programming</MenuItem>
                  <MenuItem value={75667}>75667 - CSC209 Systems</MenuItem>
                  <MenuItem value={45645}>45645 - CSC343 Databases</MenuItem>
                  <MenuItem value={34224}>34224 - CSC347 Introduction to Information Security</MenuItem>
               </Select>
               <br></br>
               <br></br>
               <input type="submit" class="btn btn-primary btn-lg btn-block active" value="Submit" />

            </form>
        </div>
      )
   } 


}

export default EnrolClass
