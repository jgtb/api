import { Router } from 'express'

import Functions from '../support/functions'
import { reset } from '../middleware'

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
  .patch(
    '/:id',
    reset,
    Functions.patch()
  )

export default Routes
