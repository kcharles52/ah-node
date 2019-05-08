import { newToken, verifyToken, signup } from '../auth'
import jwt from 'jsonwebtoken'
import config from '../../config'
import { User } from '../../resources/user/user.model'

describe('Authentication', () => {
  describe('Token', () => {
    test('should create new jwt from user', () => {
      const id = 123
      const token = newToken({ id })
      const user = jwt.verify(token, config.secrets.jwt)

      expect(user.id).toBe(id)
    })

    it('should valitate jwt and returns payload', async () => {
      const id = 1234
      const token = jwt.sign({ id }, config.secrets.jwt)
      const user = await verifyToken(token)

      expect(user.id).toBe(id)
    })
  })

  describe('signUp', () => {
    it('requires email and password', async () => {
      expect.assertions(4)

      let req = { body: {} }
      const res = {
        status(status) {
          expect(status).toBe(400)
          return this
        },
        send(result) {
          expect(typeof result.message).toBe('string')
        },
      }
      await signup(req, res)

      req = { body: { email: 'test@Email.com' } }
      await signup(req, res)
    })

    it('signUp a user', async () => {
      expect.assertions(2)
      let req = { body: { email: 'test@Email.com', password: '123' } }
      const res = {
        status(status) {
          expect(status).toBe(201)
          return this
        },
        async send(result) {
          let user = await verifyToken(result.token)
          user = await User.findById(user.id)
            .lean()
            .exec()
          expect(user.email).toBe('test@Email.com')
        },
      }

      await signup(req, res)
    })
  })
})
