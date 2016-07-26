/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import { spy } from 'sinon'

import AnonymousDashboard from '../../src/components/AnonymousDashboard'

describe('AnonymousDashboard', () => {
  it('renders a message prompting the user to sign up or log in', () => {
    const wrapper = shallow(<AnonymousDashboard logIn={ () => {} } />)
    expect(wrapper).to.have.text('Log In or Sign Up to see your apps.')
  })

  it('calls the login callback when the user clicks the log in button', () => {
    const callback = spy()
    const wrapper = shallow(<AnonymousDashboard logIn={ callback } />)
    wrapper.find('button').simulate('click')
    expect(callback).to.have.been.calledOnce
  })
})
