/* eslint no-unused-vars: 0 */
import React from 'react'
import { mount, shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import { DefaultBehavior, FromCreateElement, ManuallyCreateElement } from './index.jsx'

chai.use(chaiEnzyme())

describe('Working exemple', () => {
  it('works \\o/', () => {
    const fromCreateElement = shallow(<DefaultBehavior />)
    // No data-jsx-ext on root element === .class-A
    expect(fromCreateElement).to.have.attr('data-jsx-ext')

    // Works fine for the children
    expect(fromCreateElement.find('.class-B')).to.have.attr('data-jsx-ext')
  })
})

describe('Bug on the react component creation + styled-jsx (root doesn\'t have any data JSX attribute)', () => {
  it('React.createElement', () => {
    const fromCreateElement = shallow(<FromCreateElement />)
    // No data-jsx-ext on root element === .class-A
    expect(fromCreateElement).to.have.attr('data-jsx-ext')

    // Works fine for the children
    expect(fromCreateElement.find('.class-B')).to.have.attr('data-jsx-ext')
  })

  it('Custom tag from variable', () => {
    const manuallyCreateElement = shallow(<ManuallyCreateElement />)
    // Nothing on root element === .class-A
    expect(manuallyCreateElement).to.have.attr('data-jsx-ext')

    // Works fine for the children
    expect(manuallyCreateElement.find('.class-B')).to.have.attr('data-jsx-ext')
  })
})
