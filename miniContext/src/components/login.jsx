import React, { use, useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

//  4. useContext to use the values
    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <>
        <h1>Login</h1>
        <input type='text'
        value={username}
        placeholder='username...'
        onChange={(e)=>{setUsername(e.target.value)}}
        ></input>
        {" "}
        <input type='password'
        value={password}
        placeholder='password...'
        onChange={(e)=>{setPassword(e.target.value)}}
        ></input>
        {" "}
        <button onClick={HandleSubmit}>Submit</button>
    </>
  )
}

export default Login 