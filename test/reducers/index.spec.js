/* global describe, it */
import { expect } from 'chai'

import { logInFailure, logInRequest, logInSuccess } from '../../src/actions'
import { isLoading, profile } from '../../src/reducers'

describe('reducers', () => {
  describe('isLoading', () => {
    it('returns true for the LOG_IN_REQUEST action', () => {
      expect(isLoading(false, logInRequest())).to.be.true
    })

    it('returns false for the LOG_IN_SUCCESS action', () => {
      expect(isLoading(false, logInSuccess())).to.be.false
    })

    it('returns false for the LOG_IN_FAILURE action', () => {
      expect(isLoading(false, logInFailure())).to.be.false
    })

    it('returns the current state for an unknown action', () => {
      expect(isLoading(false, 'Unknown Action')).to.be.false
      expect(isLoading(true, 'Unknown Action')).to.be.true
    })
  })

  describe('profile', () => {
    it('returns the new profile for the LOG_IN_SUCCESS action', () => {
      const oldProfile = { name: 'Old' }
      const newProfile = { name: 'New' }
      expect(profile(oldProfile, logInSuccess(newProfile)))
        .to.deep.equal(newProfile)
    })

    it('returns the old profile for the LOG_IN_FAILURE action', () => {
      const oldProfile = { name: 'Old' }
      expect(profile(oldProfile, logInFailure()))
        .to.deep.equal(oldProfile)
    })

    it('returns the old profile for an unknown action', () => {
      const oldProfile = { name: 'Old' }
      expect(profile(oldProfile, 'Unknown Action'))
        .to.deep.equal(oldProfile)
    })
  })
})
