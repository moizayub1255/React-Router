import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    </div>
  )
}

export default Home