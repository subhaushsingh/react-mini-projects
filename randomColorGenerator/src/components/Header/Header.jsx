import React from 'react'
import './Header.css'
import { Link, NavLink } from "react-router-dom";


function Header() {
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
    <button>Generate Random color</button>
    </div>
  )
}

export default Header