/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Navbar from '../../src/components/Navbar'

describe('Navbar', () => {
  it('renders an image', () => {
    const picURL = 'http://example.com/pic.jpg'
    const wrapper = shallow(<Navbar picURL={ picURL } />)
    expect(wrapper.find('img')).to.have.attr('src', picURL)
  })
})
