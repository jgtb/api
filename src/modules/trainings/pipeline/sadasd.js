export default async (req, _, next) => {
  const pipeline = [
    { $lookup: {
      from: 'lessons',
      localField: 'lesson',
      foreignField: 'schedules._id',
      as: 'lessonData'
    }},
    { $unwind: '$lessonData' },
    { $unwind: '$lessonData.schedules' },
    { $match: {
      $expr: { $eq: [ '$lessonData.schedules._id', '$lesson' ] }
    }},
    { $lookup: {
      from: 'users',
      localField: 'presences',
      foreignField: '_id',
      as: 'presences'
    }},
    { $project: {
      _id: 1,
      lesson: '$lessonData.name',
      type: '$lessonData.schedules.type',
      description: '$lessonData.schedules.description',
      dayOfWeek: '$lessonData.schedules.dayOfWeek',
      initial: '$lessonData.schedules.initial',
      end: '$lessonData.schedules.end',
      presences: { $reduce: { input: '$presences', initialValue: '', in: { $concat: [ '$$value', '$$this.name', ', ' ] } } },
      date: 1,
      status: 1
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
