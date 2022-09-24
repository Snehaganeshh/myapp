import React,{ useState } from 'react'


function Form() {
    const [name,setName]= useState('');
    const [email,setMail]= useState('')
    const [usn,setUsn]= useState('')
    const [sem,setSem]= useState('')
    const [branch,setBranch]= useState('')

    const handleSubmit =(e) => {
        e.preventDefault();
       const data ={name:name,
                    email:email,
                    usn: usn,
                    sem: sem,
                    branch: branch
                }
                console.log(data);

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name}
            placeholder="Student name" onChange={(e) => setName(e.target.value)}/><br></br>
            <input type="email" value={email}
            placeholder="Student mail" onChange={(e) => setMail(e.target.value)}/><br></br>
            <input type="usn" value={usn}
            placeholder="Student usn" onChange={(e) => setUsn(e.target.value)}/><br></br>
            <input type="sem" value={sem}
            placeholder="Student sem" onChange={(e) => setSem(e.target.value)}/><br></br>
            <input type="branch" value={branch}
            placeholder="Student branch" onChange={(e) => setBranch(e.target.value)}/><br></br>
           <button type="submit">Submit</button>
            <p>{name}</p>
            <p>{email}</p>
            <p>{usn}</p>
            <p>{sem}</p>
            <p>{branch}</p>
          </form>
          </div>
  )
}

export default Form