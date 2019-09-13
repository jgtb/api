import { pipe, replace } from 'ramda'

const removeAllSpecialCaracteres = replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '')
const removeAllSpaces = replace(/ /g, '')

const unFormat = pipe(removeAllSpecialCaracteres, removeAllSpaces)

const randomHash = ({ length = 10 }) => 'x59d0ge1'

const first = (arr) => arr[0]

export {
  unFormat,
  randomHash,
  first
}
