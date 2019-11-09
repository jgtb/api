import moment from 'moment'

export default async (req, _, next) => {
  const { schedules } = req.body

  const schedulesDates = schedules
    .map(({ initial, end, ...schedule }) => ({
      ...schedule,
      initial: moment(initial, 'HH:mm').toDate(),
      end: moment(end, 'HH:mm').toDate()
    }))

  req.body.schedules = schedulesDates

  next()
}
