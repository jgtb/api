import Schema from '../models/schema'

import functions from '../../../functions'

const messageConfig = { single: 'Aula', plural: 'Aulas', type: 'a' }

const FUNCTIONS = functions(Schema, messageConfig)

export { messageConfig }

export default FUNCTIONS
