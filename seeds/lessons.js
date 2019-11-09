import LessonsSchema from '../src/modules/lessons/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import moment from 'moment'

export default async (Faker) => {
  const data = []

  const dayOfWeeks = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  const dates = {
    0: {
      initial: '07:30',
      end: '08:30'
    },
    1: {
      initial: '08:30',
      end: '09:30'
    },
    2: {
      initial: '09:30',
      end: '10:30'
    },
    3: {
      initial: '10:30',
      end: '11:30'
    },
    4: {
      initial: '11:30',
      end: '12:30'
    }
  }

  await asyncForEach(Array.from({ length: 20 }), async () => {
    data.push({
      name: Faker.name.findName(),
      schedules: Array
        .from({ length: 5 })
        .map((_, index) => ({
          type: Faker.name.findName(),
          description: Faker.lorem.sentence(),
          dayOfWeek: dayOfWeeks[Faker.random.number({ min: 0, max: 6 })],
          initial: moment(dates[index].initial, 'HH:mm').toDate(),
          end: moment(dates[index].end, 'HH:mm').toDate(),
          status: 'active'
        })),
      status: 'active'
    })
  })

  await LessonsSchema.create(data)
}
