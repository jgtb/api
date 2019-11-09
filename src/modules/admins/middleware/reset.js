export default async (req, _, next) => {
  req.body = { role: 'user' }

  next()
}
