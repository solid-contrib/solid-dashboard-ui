import React, { PropTypes } from 'react'

const Navbar = ({ picURL }) => (
  <nav className="navbar navbar-light bg-faded" role="navigation">
    <a className="navbar-brand" href="/">Solid</a>
    <img
      className="img-circle pull-xs-right"
      src={ picURL }
      alt="Your profile picture"
      width="30" />
  </nav>
)

Navbar.propTypes = {
  picURL: PropTypes.string.isRequired
}

export default Navbar
