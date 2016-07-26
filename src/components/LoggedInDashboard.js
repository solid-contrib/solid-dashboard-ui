import React, { PropTypes } from 'react'

import Card from './Card'

const LoggedInDashboard = ({ profile }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-4'>
          <Card
            title='Profile Builder'
            url='https://solid.github.io/solid-profile-ui/'
            description='Edit your solid profile.'
          />
        </div>
        <div className='col-sm-4'>
          <Card
            title='Connections'
            url='https://solid.github.io/solid-connections-ui/'
            description='Make Connections.'
          />
        </div>
        <div className='col-sm-4'>
          <Card
            title='Inbox'
            url='https://solid.github.io/solid-inbox/'
            description='Read your messages.'
          />
        </div>
      </div>
      <div className='row'>
        { profile.storage.length
            ? <div className='col-sm-4'>
                <Card
                  title='Storage'
                  url={ profile.storage[0] }
                  description='Access your files.'
                />
              </div>
            : ''
        }
      </div>
    </div>
  )
}

LoggedInDashboard.propTypes = {
  profile: PropTypes.object.isRequired
}

export default LoggedInDashboard
