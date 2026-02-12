import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <nav>
            <Link to="/settings">Settings</Link>
            <Link to="/dashboard">Dashboard</Link></nav>
    </div>
  )
}

export default About