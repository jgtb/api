import { Router } from 'express'

import Functions from '../support/functions'
import { schedulesDates, scheduleDate } from '../middleware'
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
    schedulesDates,
    accept({ instance: 'body', fields: [ 'name', 'schedules' ] }),
    Functions.post()
  )
  .post(
    '/schedules/:id',
    scheduleDate,
    accept({ instance: 'body', fields: [ 'type', 'dayOfWeek', 'initial', 'end' ] }),
    Functions.postArray('schedules')
  )
  .patch(
    '/:id',
    schedulesDates,
    accept({ instance: 'body', fields: [ 'name', 'schedules' ] }),
    Functions.patch()
  )
  .patch(
    '/schedules/:id',
    scheduleDate,
    accept({ instance: 'body', fields: [ '_id', 'type', 'dayOfWeek', 'initial', 'end' ] }),
    Functions.patchArray('schedules')
  )
  .patch(
    '/activateDeactivate/:id',
    Functions.activateDeactivate()
  )
  .delete(
    '/:id',
    Functions.softDelete()
  )

export default Routes
