import React, { PropTypes } from 'react'

import Card from './Card'

const LoggedInDashboard = ({ profile }) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          title="Profile Builder"
          url="https://solid.github.io/solid-profile-ui/"
          description="Edit your solid profile."
        />
      </div>
      <div className="col-sm-4">
        <Card
          title="Connections"
          url="https://solid.github.io/solid-connections-ui/"
          description="Make Connections."
        />
      </div>
      <div className="col-sm-4">
        <Card
          title="Inbox"
          url="https://solid.github.io/solid-inbox/"
          description="Read your messages."
        />
      </div>
    </div>
  )
}

LoggedInDashboard.propTypes = {
  profile: PropTypes.object.isRequired
}

export default LoggedInDashboard
