import React from 'react'
import { NavLink } from 'react-router'

const about = () => {
  return (
    <div>
        <h1>about</h1>
        <NavLink to="/" className="btn btn-primary">Back To Home</NavLink>
    </div>
    
  )
}

export default about