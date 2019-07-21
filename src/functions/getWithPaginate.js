import aggregatePaginate from '../support/aggregatePaginate'

import { onSuccessWithData, onError } from '../support/responses'
import { onGetSuccess, onGetError } from '../support/responses/messages'

import { notFound } from './_utils'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { filters, autoInject = {}, pipeline = [], sort, paginate } = req

    const pipes = [
      { $match: { ...filters, ...autoInject } },
      ...pipeline,
      { $sort: { ...sort } }
    ]

    const data = await aggregatePaginate(Schema, pipes, paginate)

    if (!data) {
      return res.status(404).send(notFound)
    }

    const onSuccessMessage = onGetSuccess(messageConfig)
    const successResponse = onSuccessWithData({ status: 200, message: onSuccessMessage, data, res })

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onGetError(messageConfig)
    const errorResponse = onError({ status: 409, message: onErrorMessage, err, res })

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
