import request from 'supertest'
import { app } from '../server'

describe('API dummy test', () => {
  test('setup test', () => {
    expect('test').toBe('test')
  })
})

describe('make reqests to the API', () => {
  it('should respond with json data', (done) => {
    request(app)
      .get('api/data')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    done()
  })
})
