import { Types } from 'mongoose'

import { REQUIRED } from '../../../support/validations/messages'

export default {
  user: {
    type: Types.ObjectId,
    ref: 'users',
    required: [true, REQUIRED],
    index: true
  },
  value: {
    type: Number,
    required: [true, REQUIRED],
    index: true
  },
  date: {
    type: Date,
    required: [true, REQUIRED]
  },
  status: {
    type: String,
    enum: ['paid', 'canceled', 'deleted'],
    default: 'paid'
  }
}
