import { Types } from 'mongoose'

import { onSuccess, onError } from '../support/responses'
import { onGetByIdSuccess, onGetByIdError } from '../support/responses/messages'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { autoInject = {}, params, pipeline = [] } = req
    const { id } = params

    const [ model ] = await Schema.aggregate([
      { $match: { _id: Types.ObjectId(id), ...autoInject } },
      ...pipeline
    ])

    if (!model) {
      return res.status(404).send({ message: 'Define' })
    }

    const onSuccessMessage = onGetByIdSuccess(messageConfig)
    const successResponse = onSuccess({ status: 200, message: onSuccessMessage, data: model, res })

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onGetByIdError(messageConfig)
    const errorResponse = onError({ status: 409, message: onErrorMessage, err, res })

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
