import { statusVirtual } from '../../../support/aggregation'

export default (req, _, next) => {
  const pipeline = [
    { ...statusVirtual },
    { $lookup: {
      from: 'categories',
      let: { category: '$category' },
      pipeline: [
        { $match: {
          $expr: {
            $eq: [ '$_id', '$$category' ]
          }
        }},
        { $lookup: {
          from: 'vehicles',
          localField: 'vehicle',
          foreignField: '_id',
          as: 'vehicle'
        }},
        { $unwind: '$vehicle' },
        { $project: {
          _id: false,
          name: 1,
          vehicle: '$vehicle.name'
        }}
      ],
      as: 'category'
    }},
    { $unwind: '$category' },
    { $project: {
      _id: 1,
      name: 1,
      category: '$category.name',
      vehicle: '$category.vehicle',
      status: 1
    }}
  ]
  
  req.setPipeline(pipeline)

  next()
}
