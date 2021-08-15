import React from 'react'
import './Navigation.css'


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="home">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars" style={{color:'#fff'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="home">Home
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;