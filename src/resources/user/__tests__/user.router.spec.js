import router from '../user.router'

describe('user router', () => {
  it('has user routes', () => {
    const routes = [{ path: '/', method: 'get' }, { path: '/', method: 'put' }]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      )

      expect(match).toBeTruthy()
    })
  })
})
