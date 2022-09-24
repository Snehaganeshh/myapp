// import logo from './logo.svg';
import './App.css';
import { hydrate } from 'react-dom';
// import image from "./SNEHA.png"
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import React from 'react';
import Form from "./Form";
import ToDoList from './ToDoList';
import Task from './Task'
//import Data from './Data';


function NavBar() {
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/team">Team</Link>
      <Link to="/add-student">AddStudent</Link>
      <Link to="/todo-list">To do List</Link>
      <Link to="/task">StudentDetails</Link>
    </div>
  )
}
 
function Team(){
  return (
    <div>
      Team Details- <br></br>
      Memebers :<br></br>
       1.Sneha<br>
      </br>2.Surya<br>
                </br>
                3.Shreya<br>
                </br>
                4.Hitha

    </div>
  )
}

 function About() {
  return (
    <div>
      This is my Component
    </div>
  )
 }

 function Contact() {
  return(
    <div>
      This is Contact Component
    </div>
  )
 }
 function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path ="/about" element={<About />}></Route>
        <Route path ="/contact" element={<Contact/>}></Route>
        <Route path ="/team" element={<Team/>}></Route>
        <Route path ="/add-student" element={<Form/>}></Route>
        <Route path="/todo-list" element={<ToDoList/>}></Route>
        <Route path="/task" element={<Task/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>


  );
  }
  export default App;


// function Portfolio() {
//   return <div>
//     <body bgcolor="skyblue"><h1><center>SNEHA G</center></h1></body>
//     <img src={image} width='15%' height='15%' style={{float: "left"}} />
   
    
//   </div>
// }

// function About() {
//   return <div>
//     <h2>About</h2>
    
// <p>A highly disciplined and hardworking individual, looking forward
// to work in an organization that provides me with ample opportunities to enhance my skills and knowledge along with
// contributing to the growth of the organization & always excited to Learn & Work in New Technologies.
// </p>
//   </div>
// }
//   function Education(){
//     return <div>
//     <h2>Education</h2>
//     <p><b>B.E COMPUTER SCIENCE ENGINEERING
//     2019-2023 |7.30</b></p>
//     <a>MOODLAKATTE INSTITUTE OF TECHNOLOGY KUNDAPURA,UDUPI DISTRICT</a>
//     <p style={{padding:0}}><b> PUC 2019 |85%</b></p>
//     <a>MAHAJANA SANSKRIT COLLEGE HIGHER SECONDARY
// SCHOOL PERDALA,KASARGOD DISTRICT</a>
//     <p style={{padding:0}}><b>SSLC 2017 |75% </b></p>
//     <a>NAVAJIVANA HIGHER SECONDARY SCHOOL PERDALA,KASARGOD DISTRICT</a>
    
    
//     </div>
//   }



