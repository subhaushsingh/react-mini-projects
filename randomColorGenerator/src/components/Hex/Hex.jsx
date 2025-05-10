import React, { useEffect, useState } from 'react'
import './Hex.css'
import { useOutletContext } from 'react-router-dom'


function generateHex(){
   return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}

function Hex() {
  const {generateCount} = useOutletContext();
  const [color,setColor] = useState('#000000')

  useEffect(()=>{
    setColor(generateHex());
  },[generateCount])



  return (
    <>
      <div className='container' style={{backgroundColor: color , textAlign:'center'}}>
        <h1>Hex{color}</h1>
      </div>
    </>
  )
}

export default Hex