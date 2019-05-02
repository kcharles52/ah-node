import app from './app'
import config from './config'
import { connect } from './utils/db'

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (error) {
    console.error(error)
  }
}
