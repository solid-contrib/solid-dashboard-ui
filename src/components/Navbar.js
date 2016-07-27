import React, { PropTypes } from 'react'

const Navbar = ({ picURL }) => (
  <div style={{ paddingBottom: '1rem' }}>
    <nav className='navbar navbar-light bg-faded' role='navigation'>
      <a className='navbar-brand' href='/'>Solid</a>
      <img
        className='img-circle pull-xs-right'
        src={picURL}
        alt='Your profile picture'
        width='30'
      />
    </nav>
  </div>
)

Navbar.propTypes = {
  picURL: PropTypes.string.isRequired
}

export default Navbar
