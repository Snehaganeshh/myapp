import React,{ useState } from 'react'
//import Table from './Table'


function StudentDetails(props) {
    const [name,setName]= useState('');
    const [email,setMail]= useState('')
    const [phone,setPhone]= useState('')
    const [sem,setSem]= useState('')
    const [branch,setBranch]= useState('')
    const [usn,setUsn]= useState('')

    const handleSubmit =(e) => {
        e.preventDefault();
       const data ={name:name,
                    email: email,
                    phone: phone,
                    sem: sem,
                    branch: branch,
                    usn: usn
                }
                console.log(data);

                // props.onAddToDoCallback(data);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name}
            placeholder="Student name" onChange={(e) => setName(e.target.value)}/><br></br>
            <input type="email" value={email}
            placeholder="Student email" onChange={(e) => setMail(e.target.value)}/><br></br>
            <input type="usn" value={phone}
            placeholder="Student phone" onChange={(e) => setPhone(e.target.value)}/><br></br>
            <input type="sem" value={sem}
            placeholder="Student sem" onChange={(e) => setSem(e.target.value)}/><br></br>
            <input type="branch" value={branch}
            placeholder="Student branch" onChange={(e) => setBranch(e.target.value)}/><br></br>
            <input type="usn" value={usn}
            placeholder="Student usn" onChange={(e) => setUsn(e.target.value)}/><br></br>
           <button type="Onsubmit">Submit</button>
            {/* <p>{name}</p> */}
            {/* <p>{email}</p>
            <p>{phone}</p>
            <p>{sem}</p>
            <p>{branch}</p>
            <p>{usn}</p> */}
          </form>
          </div>
  )
}

export default StudentDetails