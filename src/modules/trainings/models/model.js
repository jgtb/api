import { Types } from 'mongoose'

import { REQUIRED } from '../../../support/validations/messages'

export default {
  lesson: {
    type: Types.ObjectId,
    ref: 'lessons',
    required: [true, REQUIRED],
    index: true
  },
  presences: {
    type: [Types.ObjectId],
    ref: 'users',
    index: true
  },
  date: {
    type: Date,
    required: [true, REQUIRED]
  },
  status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active'
  }
}
