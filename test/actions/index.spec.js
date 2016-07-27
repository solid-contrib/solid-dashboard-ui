/* global beforeEach, describe, it */
import { expect } from 'chai'
import proxyquire from 'proxyquire'
import { spy } from 'sinon'

describe('actions', () => {
  let actions
  let solidClientStub

  beforeEach(() => {
    solidClientStub = {}
    actions = proxyquire(
      '../../src/actions', { 'solid-client': solidClientStub }
    )
  })

  describe('logIn', () => {
    it('dispatches a LOG_IN_REQUEST action', () => {
      const dispatchSpy = spy()
      const unwrappedLogIn = actions.logIn()
      return unwrappedLogIn(dispatchSpy)
        .then(() => {
          expect(dispatchSpy).to.have.been.calledWith({ type: actions.LOG_IN_REQUEST })
        })
    })

    it('dispatches a LOG_IN_FAILURE action when the log-in fails', () => {
      const dispatchSpy = spy()
      const unwrappedLogIn = actions.logIn()
      solidClientStub.login = () => Promise.reject('oops!')
      return unwrappedLogIn(dispatchSpy)
        .then(() => {
          expect(dispatchSpy).to.have.been.calledTwice
          expect(dispatchSpy).to.have.been.calledWith({ type: actions.LOG_IN_REQUEST })
          expect(dispatchSpy).to.have.been.calledWith({
            type: actions.LOG_IN_FAILURE,
            error: 'oops!'
          })
        })
    })

    it('dispatches a LOG_IN_FAILURE action when getProfile fails', () => {
      const dispatchSpy = spy()
      const unwrappedLogIn = actions.logIn()
      solidClientStub.login = () => Promise.resolve(true)
      solidClientStub.getProfile = () => Promise.reject('oops!')
      return unwrappedLogIn(dispatchSpy)
        .then(() => {
          expect(dispatchSpy).to.have.been.calledTwice
          expect(dispatchSpy).to.have.been.calledWith({ type: actions.LOG_IN_REQUEST })
          expect(dispatchSpy).to.have.been.calledWith({
            type: actions.LOG_IN_FAILURE,
            error: 'oops!'
          })
        })
    })

    it('dispatches a LOG_IN_SUCCESS action when the log-in succeeds', () => {
      const dispatchSpy = spy()
      const unwrappedLogIn = actions.logIn()
      solidClientStub.login = () => Promise.resolve(true)
      solidClientStub.getProfile = () => Promise.resolve({ name: 'Daniel' })
      return unwrappedLogIn(dispatchSpy)
        .then(() => {
          expect(dispatchSpy).to.have.been.calledTwice
          expect(dispatchSpy).to.have.been.calledWith({ type: actions.LOG_IN_REQUEST })
          expect(dispatchSpy).to.have.been.calledWith({
            type: actions.LOG_IN_SUCCESS,
            profile: { name: 'Daniel' }
          })
        })
    })
  })

  describe('logInRequest', () => {
    it('returns a logInRequest action', () => {
      expect(actions.logInRequest()).to.deep.equal({ type: actions.LOG_IN_REQUEST })
    })
  })

  describe('logInSuccess', () => {
    it('returns a logInSuccess action', () => {
      const profile = { field: true }
      expect(actions.logInSuccess(profile)).to.deep.equal({
        type: actions.LOG_IN_SUCCESS,
        profile
      })
    })
  })

  describe('logInFailure', () => {
    it('returns a logInFailure action', () => {
      const error = 'Could not log in'
      expect(actions.logInFailure(error)).to.deep.equal({
        type: actions.LOG_IN_FAILURE,
        error
      })
    })
  })
})
