import React from 'react'

function Welcome(props){
    return (
        <div>
            <h1>Welcome!!....<br>
            </br> {props.name}<br>
        </br> {props.usn} <br>
        </br> {props.email}<br>
        </br>{props.semester} <br>
        </br>{props.branch}</h1>

        </div>
    )
}

function Props() {
  return (
    <div>
        <Welcome name="Name: Sneha"
         usn="USN : 4mk19cs050"
         email="Email : sneharaj@gmail.com"
         semester="Semester : seventh"
         branch="Branch: Cse"/>
    </div>
  )
}

export default Props