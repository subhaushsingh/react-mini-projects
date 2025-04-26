import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!user) return <h1>Not logged in...</h1>

    if(!user.password) return <h2>password field is empty</h2>

  return (
    <><h1>Profile: {user.username}</h1></>
  )
}

export default Profile