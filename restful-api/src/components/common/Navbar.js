import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar is-success">
        <div className="container">
          < div className="navbar-brand">
            <Link className="navbar-item" to="/">Greek Mythology ⚡️ </Link>
            <Link className="navbar-item" to="/gods">Gods</Link>
            <Link className="navbar-item" to="/register">Register</Link>
            <Link className="navbar-item" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar 
