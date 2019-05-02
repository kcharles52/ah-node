import { me, updateMe } from '../user.controller'
import { User } from '../user.model'

describe('User controller', () => {
  it('should create user', async () => {
    expect.assertions(2)

    const user = await User.create({ email: 'test@email.com', password: '1' })

    const req = { user }
    const res = {
      status(status) {
        expect(status).toBe(200)
        return this
      },
      json(result) {
        expect(result.data._id.toString()).toBe(user._id.toString())
      },
    }

    await me(req, res)
  })

  it('should find and update user', async () => {
    expect.assertions(2)

    const user = await User.create({ email: 'test@email.com', password: '1' })

    const req = {
      user,
      body: { email: 'updated@gmail.com' },
    }
    const res = {
      status(status) {
        expect(status).toBe(200)
        return this
      },
      json(result) {
        expect(result.data.email).toBe('updated@gmail.com')
      },
    }

    await updateMe(req, res)
  })
})
