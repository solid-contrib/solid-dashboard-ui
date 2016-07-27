/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import AnonymousDashboard from '../../src/components/AnonymousDashboard'
import LoggedInDashboard from '../../src/components/LoggedInDashboard'
import { Dashboard } from '../../src/containers/Dashboard'

describe('Dashboard', () => {
  it('renders an AnonymousDashboard when the user is logged out', () => {
    const profile = { isLoaded: false }
    const actions = { logIn: () => {} }
    const wrapper = shallow(
      <Dashboard profile={ profile } actions={ actions } />
    )
    expect(wrapper.containsMatchingElement(
      <AnonymousDashboard logIn={ actions.logIn } />
    )).to.be.true
  })

  it('renders a LoggedInDashboard when the user is logged in', () => {
    const profile = { isLoaded: true }
    const actions = { logIn: () => {} }
    const wrapper = shallow(
      <Dashboard profile={ profile } actions={ actions } />
    )
    expect(wrapper.containsMatchingElement(
      <LoggedInDashboard profile={ profile } />
    )).to.be.true
  })
})
