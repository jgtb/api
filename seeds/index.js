import initDatabase from '../src/initDatabase'

import dropDatabase from './_dropDatabase'

import { Faker } from './_faker'

import users from './users'
import lessons from './lessons'

const seeds = async () => {
  await initDatabase()
  await dropDatabase()

  await users(Faker)
  await lessons(Faker)

  process.exit()
}

seeds()
