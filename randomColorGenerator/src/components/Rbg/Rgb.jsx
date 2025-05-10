import React from 'react'
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import './Rgb.css'



function generateRgb(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`
}

function Rgb() {

  const {generateCount} = useOutletContext();
  const [color,setColor] =useState('rgb(0,0,0)');


  useEffect(()=>{
    setColor(generateRgb());
  },[generateCount])

  return (
    <>
      <div className='container' style={{backgroundColor: color,textAlign:"center"}}>
        <h1>{color}</h1>
      </div>
    </>
  )
}

export default Rgb