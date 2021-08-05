import { Link } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/FoodIndex" className="navbar-item">
              Foods
            </Link>
            <Link to="/flags/CountriesIndex" className="navbar-item">
              Flags
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar