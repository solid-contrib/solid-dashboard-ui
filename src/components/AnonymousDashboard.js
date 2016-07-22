import React, { PropTypes } from 'react'

const AnonymousDashboard = ({ logIn }) => (
  <div className="row">
    <div className="col-xs-12">
      <span className="center-block" style={{ textAlign: "center" }}>
        <button className="btn btn-link centered" style={{ padding: '0px' }} onClick={ logIn }>Log In</button> or <a href="https://solid.github.io/solid-signup/">Sign Up</a> to access your dashboard.
      </span>
    </div>
  </div>
)

AnonymousDashboard.propTypes = {
  logIn: PropTypes.func.isRequired
}

export default AnonymousDashboard
