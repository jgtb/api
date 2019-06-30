import { onSuccess, onError } from '../support/responses'
import {
  onActivateDeactivateSuccess,
  onActivateDeactivateError
} from '../support/responses/messages'

import { updateOptions, unauthorizedModel } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { params, autoInject = {} } = req
    const { id } = params

    const finder = {
      _id: id,
      ...autoInject
    }

    const model = await Schema.findOne(finder)

    if (!model) {
      return res.status(404).send(unauthorizedModel)
    }

    const update = { isActive: !model.isActive }
    await Schema.findOneAndUpdate(finder, update, updateOptions)

    const onSuccessMessage = onActivateDeactivateSuccess(messageConfig)
    const successResponse = onSuccess(200, onSuccessMessage)

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onActivateDeactivateError(messageConfig)
    const errorResponse = onError(409, onErrorMessage, err)

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}