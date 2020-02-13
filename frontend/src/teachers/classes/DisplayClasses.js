import React from 'react'

const ClassList = ({classes}) => {

  const classList = classes.length ? (
    classes.map(cl => {
      return (
        <div className="row">
            <div className="col s12 m5 cards-container" key={cl.id}>
                <div className="card blue-grey darken-2">
                    <div className="card-image">
                        <img src={require("../images/test.jpg")} alt="" width="300" height="200"/>
                    </div>
                    <div className="card-content white-text">
                        <span className="card-title">{cl.courseCode}</span>

                        <span>{cl.desc}</span>
                    </div>
                    <div className="card-action">
                        <a href="/">View As Student</a>
                        <a href="/">View As Instructor</a>
                    </div>
                </div>
            </div>
        </div>

      )
    })
  ) : (
    <p className="center">You have no classes to manage.</p>
  );

  return (
    <div className="class collection">
      {classList}
    </div>
  )
}

export default ClassList;