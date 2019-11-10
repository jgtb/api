import LessonsSchema from '../src/modules/lessons/models/schema'

import asyncForEach from '../src/support/asyncForEach'

export default async (Faker) => {
  const data = []

  await asyncForEach(Array.from({ length: 20 }), async () => {
    data.push({
      name: Faker.name.findName(),
      type: Faker.name.findName(),
      description: Faker.lorem.sentence(),
      status: 'active'
    })
  })

  await LessonsSchema.create(data)
}
