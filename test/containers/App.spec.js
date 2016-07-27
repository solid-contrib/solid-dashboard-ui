/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Navbar from '../../src/components/Navbar'
import { App } from '../../src/containers/App'
import Dashboard from '../../src/containers/Dashboard'

describe('App', () => {
  it('renders a Navbar and a Dashboard', () => {
    const wrapper = shallow(<App profile={{ picture: null }} />)
    expect(wrapper.containsAllMatchingElements([
      <Navbar picURL='assets/img/solid-logo.svg' />,
      <Dashboard />
    ])).to.be.true
  })

  it('passes the profile picture to the Navbar when defined', () => {
    const picURL = 'http://example.com/pic.jpg'
    const wrapper = shallow(<App profile={{ picture: picURL }} />)
    expect(wrapper.containsMatchingElement(
      <Navbar picURL={picURL} />
    )).to.be.true
  })
})
