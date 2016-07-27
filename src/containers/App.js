import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'

// export unconnected App for testing
export const App = ({ profile }) => (
  <div>
    <Navbar picURL={profile.picture || 'assets/img/solid-logo.svg'} />
    <Dashboard />
  </div>
)

App.propTypes = {
  profile: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps)(App)
