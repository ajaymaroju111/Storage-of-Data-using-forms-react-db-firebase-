import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  const [data,setdata] = useState({
    username : '',
    email : '',
    password : '',
    ConformPassword : '',
  })
  const {username,email,password,ConformPassword} = data;
  const handler = e =>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submitHandler =e =>{
    e.preventDefault();
    axios.post("https://maroju-111-default-rtdb.firebaseio.com/register.json",data).then(()=> alert("Submitted succesfully"));
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type='text' name='username' value={username} onChange={handler} placeholder='username'/><br/>
          <input type='email' name='email' value={email} onChange={handler} placeholder='email'/><br/>
          <input type='password' name='password' value={password} onChange={handler} placeholder='password'/><br/>
          <input type='password'name='ConformPassword' value={ConformPassword} onChange={handler} placeholder='Conform Password'/><br/>
          <input type='submit'/>
        </form>
      </center>
    </div>
  )
}

export default App
