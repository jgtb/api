import mongoose from 'mongoose'

import TransactionsSchema from '../src/modules/transactions/models/schema'
import ProductsSchema from '../src/modules/products/models/schema'
import UsersSchema from '../src/modules/users/models/schema'

import asyncForEach from '../src/support/asyncForEach'

import _getRandom from './_getRandom'
import Faker from './_faker'

export default async () => {
  await asyncForEach(Array.from({ length: 1000 }), async () => {
    const [ fromUser ] = await _getRandom({ Schema: UsersSchema, size: 1 })
    const [ toUser ] = await _getRandom({ Schema: UsersSchema, size: 1 })
    const [ product ] = await _getRandom({
      Schema: ProductsSchema,
      size: 1,
      $match: { user: mongoose.Types.ObjectId(fromUser._id) }
    })

    if (!product) {
      return
    }

    const quantity = Faker.integer({ min: 10, max: 30 })
    const total = +(product.price * quantity).toFixed(0)

    await TransactionsSchema({
      user: fromUser._id,
      product: product._id,
      quantity,
      total
    }).save()
    await TransactionsSchema({
      user: toUser._id,
      product: product._id,
      quantity,
      total: -total
    }).save()
    await UsersSchema.findByIdAndUpdate(fromUser._id, { $inc: { wallet: +total } })
    await UsersSchema.findByIdAndUpdate(toUser._id, { $inc: { wallet: -total } })
  })
}