import get from './get'
import getWithPaginate from './getWithPaginate'
import getById from './getById'
import post from './post'
import insertMany from './insertMany'
import patch from './patch'
import _delete from './delete'
import activateDeactivate from './activateDeactivate'

const reducer = (params) => (acc, [ key, value ]) => ({ ...acc, [key]: value(...params) })

const functions = {
  get,
  getWithPaginate,
  getById,
  post,
  insertMany,
  patch,
  delete: _delete,
  activateDeactivate
}

export default (...params) => {
  const onReducer = reducer(params)

  return Object
    .entries(functions)
    .reduce(onReducer, {})
}
