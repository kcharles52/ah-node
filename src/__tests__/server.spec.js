import request from 'supertest'
import app from '../app'

describe('API dummy test', () => {
  test('setup test', () => {
    expect('test').toBe('test')
  })
})

describe('make reqests to the API', () => {
  it('should respond with json data', () => {
    return request(app)
      .get('/api/data')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('initial server setup')
      })
  })

  it('Respond with 404 on wrong request', async () => {
    const response = await request(app).post('/api/data')
    expect(response.status).toBe(404)
  })
})
