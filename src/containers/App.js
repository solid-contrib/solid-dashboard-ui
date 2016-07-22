import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import Navbar from '../components/Navbar'

let App = ({ profile, actions }) => {
  const picURL = profile ? profile.picURL :  "assets/img/solid-logo.svg"
  return (
    <div>
      <Navbar picURL={ picURL } onClickLogIn={ actions.logIn } />
    </div>
  )
}

App.PropTypes = {
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
