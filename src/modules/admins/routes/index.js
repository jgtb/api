import { Router } from 'express'

import Functions from '../support/functions'
import { reset } from '../middleware'
import { baseMatch } from '../pipeline'

const Routes = Router()

Routes
  .get(
    '/',
    baseMatch,
    Functions.get()
  )
  .get(
    '/paginate',
    baseMatch,
    Functions.getWithPaginate()
  )
  .get(
    '/details/:id',
    baseMatch,
    Functions.getById()
  )
  .patch(
    '/reset/:id',
    reset,
    Functions.patch()
  )

export default Routes
