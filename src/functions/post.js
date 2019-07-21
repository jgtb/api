import { onSuccess, onError } from '../support/responses'
import { onPostSuccess, onPostError } from '../support/responses/messages'

export default (Schema, messageConfig) => async (req, res, next) => {
  try {
    const { body, autoInject = {} } = req

    const payload = {
      ...body,
      ...autoInject
    }

    await Schema(payload).save()

    const onSuccessMessage = onPostSuccess(messageConfig)
    const successResponse = onSuccess({ status: 200, message: onSuccessMessage, res })

    res.status(200).send(successResponse)
  } catch (err) {
    const onErrorMessage = onPostError(messageConfig)
    const errorResponse = onError({ status: 409, message: onErrorMessage, err, res })

    res.status(409).send(errorResponse)
  } finally {
    next()
  }
}
