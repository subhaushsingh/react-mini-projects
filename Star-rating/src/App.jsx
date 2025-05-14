import { useState } from 'react'

import './App.css'

function App({noOfStars}) {
 

  return (
    <>
      <div className='container'>
        [...Array(noOfStars)]
      </div>
    </>
  )
}

export default App
