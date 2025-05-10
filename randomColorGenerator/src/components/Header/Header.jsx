import React from 'react'
import './Header.css'
import { Link, NavLink, useLocation } from "react-router-dom";


function Header({onGenerate}) {

  const location = useLocation();
  console.log(location);

  return (
    <div className='Header'>
    <button>
        <NavLink to="/hex">
            Change to Hex
        </NavLink>
    </button>
    <button>
        <NavLink>
            Change to Rgb
        </NavLink>
    </button>
    <button onClick={onGenerate}>Generate Random color</button>
    </div>
  )
}

export default Header