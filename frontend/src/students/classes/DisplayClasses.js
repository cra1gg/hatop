import React from 'react'

const ClassList = ({classes}) => {

  const classList = classes.length ? (
    classes.map(cl => {
      return (
            <div className="col s6 16" key={cl.id}>
                <div className="card blue-grey darken-10">
                    <div className="card-image">
                        <img src={require("../images/innovation-brain.jpg")} alt={cl.course_code} />
                    </div>
                    <div className="card-content white-text">
                        <span className="card-title">{cl.courseCode}</span>

                        <span>{cl.desc}</span>
                    </div>
                    <div className="card-action">
                    {/* Each route makes a GET request for the grades and quizzes given the classcode + username in the get request. */}
                        <a href="/studentStats">View grades</a>   
                        <a href="/quizzes">View quizzes</a>
                    </div>
                </div>
            </div>




      )
    })
  ) : (
    <p className="center">You aren't enrolled in any classes.</p>
  );

  return (
    <div className="class collection grey lighten-5">
      <div className="container">

        <div className="row">
          {classList}
        </div>
      </div>
    </div>
  )
}

export default ClassList;
