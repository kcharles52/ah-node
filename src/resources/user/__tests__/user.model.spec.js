import { User } from '../user.model'
// import mongoose from 'mongoose'
// const assert = require('assert')

describe('User model', () => {
  describe('schema', () => {
    it('should have correct user credentials', () => {
      const { email, password } = User.schema.obj

      expect(email).toEqual({
        type: String,
        required: true,
        unique: true,
        trim: true,
      })

      expect(password).toEqual({
        type: String,
        required: true,
      })
    })

    it('should create a new user', (done) => {
      return User.create({ email: 'test@email.com', password: 'test' }).then(
        (result) => {
          expect(result.email).toEqual('test@email.com')
          expect(result._id).toBeTruthy()
          expect(result.password).toBeTruthy()
          done()
        }
      )
    })
  })
})
