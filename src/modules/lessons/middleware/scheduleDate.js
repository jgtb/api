import moment from 'moment'

export default async (req, _, next) => {
  const { initial, end } = req.body

  req.body.initial = moment(initial, 'HH:mm').toDate()
  req.body.end = moment(end, 'HH:mm').toDate()

  next()
}
