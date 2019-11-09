import { Router } from 'express'

import Functions from '../support/functions'
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

export default Routes
