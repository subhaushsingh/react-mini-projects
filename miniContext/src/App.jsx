import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (


    // 3. We wrap the app with userContextProvider to provide the context to entire app
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
