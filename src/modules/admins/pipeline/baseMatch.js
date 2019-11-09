export default async (req, _, next) => {
  const pipeline = [
    { $match: {
      role: 'master'
    }}
  ]

  req.setPipeline(pipeline)

  next()
}
