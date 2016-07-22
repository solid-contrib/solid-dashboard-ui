import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import AnonymousDashboard from '../components/AnonymousDashboard'
import LoggedInDashboard from '../components/LoggedInDashboard'

const Dashboard = ({ profile, actions }) => {
  return (
    <div className="container">
      { profile.isLoaded
        ? <LoggedInDashboard profile={ profile } />
        : <AnonymousDashboard logIn={ actions.logIn } /> }
    </div>
  )
}

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
