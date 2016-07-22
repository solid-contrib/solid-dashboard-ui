import React from 'react'
import { connect } from 'react-redux'

import { logIn } from '../actions'
import Navbar from '../components/Navbar'

function mapDispatchToProps (dispatch) {
  return {
    onClickLogIn: () => {
      dispatch(logIn())
    }
  }
}

// Maps the current redux store state to an object with props as keys
function mapStateToProps (state) {
  const profile = state.profile
  const picURL = state.profile ? state.profile.picture : "assets/img/solid-logo.svg"
  return { picURL }
}

const VisibleNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default VisibleNavbar
