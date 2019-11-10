import { Router } from 'express'

import Functions from '../support/functions'
import { accept } from '../../../middleware'

const Routes = Router()

Routes
  .get(
    '/',
    Functions.get()
  )
  .get(
    '/paginate',
    Functions.getWithPaginate()
  )
  .get(
    '/details/:id',
    Functions.getById()
  )
  .post(
    '/',
    accept({ instance: 'body', fields: [ 'user', 'value', 'status' ] }),
    Functions.post()
  )
  .patch(
    '/:id',
    accept({ instance: 'body', fields: [ 'user', 'value', 'status' ] }),
    Functions.patch()
  )
  .delete(
    '/:id',
    Functions.softDelete()
  )

export default Routes
