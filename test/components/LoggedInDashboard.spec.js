/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Card from '../../src/components/Card'
import LoggedInDashboard from '../../src/components/LoggedInDashboard'

describe('LoggedInDashboard', () => {
  it('renders a card for solid storage if available', () => {
    const profileWithStorage = {
      storage: ['http://example.com/storage']
    }
    const profileWithoutStorage = { storage: [] }
    const dashboardWithStorage = shallow(
      <LoggedInDashboard profile={profileWithStorage} />
    )
    const dashboardWithoutStorage = shallow(
      <LoggedInDashboard profile={profileWithoutStorage} />
    )
    const storageCard =
      <Card
        title='Storage'
        url={profileWithStorage.storage[0]}
        description='Access your files.'
      />

    expect(dashboardWithStorage.containsMatchingElement(storageCard))
      .to.be.true
    expect(dashboardWithoutStorage.containsMatchingElement(storageCard))
      .to.equal(false)
  })
})
