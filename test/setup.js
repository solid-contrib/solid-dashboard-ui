var chai = require('chai')
var chaiEnzyme = require('chai-enzyme')
var sinonChai = require('sinon-chai')
var jsdom = require('jsdom').jsdom

// set up jsdom
var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

// set up chai-enzyme
chai.use(chaiEnzyme())
chai.use(sinonChai)
