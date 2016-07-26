/* global describe, it */
import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Card from '../../src/components/Card'

describe('Card', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Card title='My Card' url='' description='' />)
    expect(wrapper.find('.card-title')).to.have.text('My Card')
  })

  it('renders a URL', () => {
    const wrapper = shallow(
      <Card title='' url='http://example.com' description='' />
    )
    expect(wrapper.find('.card-url'))
      .to.have.attr('href', 'http://example.com')
  })

  it('renders a description', () => {
    const wrapper = shallow(
      <Card title='' url='' description='A cool card' />
    )
    expect(wrapper.find('.card-text'))
      .to.have.text('A cool card')
  })
})
