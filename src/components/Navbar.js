import React, { PropTypes } from 'react'

const Navbar = ({ picURL, logIn }) => (
  <nav className="navbar navbar-light bg-faded" role="navigation">
    <a className="navbar-brand" href="/">Solid</a>
    <div className="dropdown pull-xs-right">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="user-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <img
          className="img-circle"
          src={ picURL }
          alt="Your profile picture"
          width="30" />
        <span className="sr-only">
          Click to expand the user menu.
        </span>
      </button>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="user-dropdown">
        <button className="btn btn-link dropdown-item" onClick={ logIn }>Log in</button>
      </div>
    </div>
  </nav>
)

Navbar.PropTypes = {
  logIn: PropTypes.func.isRequired,
  picURL: PropTypes.string.isRequired
}

export default Navbar
