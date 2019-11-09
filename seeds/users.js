import UsersSchema from '../src/modules/users/models/schema'

import asyncForEach from '../src/support/asyncForEach'

export default async (Faker) => {
  const data = []

  await asyncForEach(Array.from({ length: 150 }), async () => {
    data.push({
      role: 'user',
      name: Faker.name.findName(),
      email: Faker.internet.email().toLowerCase(),
      password: '123456',
      status: 'active'
    })
  })

  await UsersSchema.create(data)
}
