import { atLeastValidator } from '../../../support/validations'
import { REQUIRED } from '../../../support/validations/messages'

export default {
  name: {
    type: String,
    unique: true,
    required: [true, REQUIRED],
    trim: true,
    index: true
  },
  schedules: {
    type: [
      {
        type: {
          type: String,
          required: [true, REQUIRED]
        },
        description: {
          type: String
        },
        dayOfWeek: {
          type: String,
          required: [true, REQUIRED],
          enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        },
        initial: {
          type: Date,
          required: [true, REQUIRED]
        },
        end: {
          type: Date,
          required: [true, REQUIRED]
        },
        status: {
          type: String,
          enum: ['active', 'inactive', 'deleted'],
          default: 'active'
        }
      }
    ],
    validate: {
      validator: atLeastValidator(1),
      message: REQUIRED
    }
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  }
}
