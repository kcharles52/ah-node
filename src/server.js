import app from './app'
import config from './config'

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (error) {
    console.error(error)
  }
}
