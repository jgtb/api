import Schema from '../../users/models/schema'

import functions from '../../../functions'

const messageConfig = { single: 'Administrador', plural: 'Administradors', type: 'o' }

const FUNCTIONS = functions(Schema, messageConfig)

export { messageConfig }

export default FUNCTIONS
