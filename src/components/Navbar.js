import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="components/Navbar.js">{Props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="components/Navbar.js">{Props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="components/Navbar.js">Options</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="components/Navbar.js" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="components/Navbar.js">Action</a></li>
                  <li><a className="dropdown-item" href="components/Navbar.js">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="components/Navbar.js">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${Props.textMode}`}>
  <input className="form-check-input  " onClick={Props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label `} for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
            
          </div>
        </div>

      </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired

}
