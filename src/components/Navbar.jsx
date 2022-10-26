import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props)
{
    return(
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.Dropdown}
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="https://www.facebook.com/Soumik2017" target="_blank">{props.FaceBook}</Link></li>
            <li><Link className="dropdown-item" to="https://www.instagram.com/_sou_mik/" target="_blank">Instagram</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Thanks for Contacting me</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label " for="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} mode</label>
      </div>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string,
}
Navbar.defaultProps={
    title:"Hello There",
    about:"No About"
}