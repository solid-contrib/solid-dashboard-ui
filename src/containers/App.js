import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import Dashboard from './Dashboard'
import Navbar from '../components/Navbar'

let App = ({ profile, actions }) => (
  <div>
    <Navbar picURL={ profile.picture ||  "assets/img/solid-logo.svg" } />
    <Dashboard />
  </div>
)


App.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
