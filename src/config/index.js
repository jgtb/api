import local from './local'
import server from './server'

const configs = {
  local,
  development: server,
  staging: server,
  production: server
}

const config = configs[process.env.NODE_ENV]

console.log(config)

export default config
