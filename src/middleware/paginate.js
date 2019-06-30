export default (req, _, next) => {
  const { page = 1, limit = 10 } = req.query

  req.paginate = {
    page,
    limit
  }

  next()
}