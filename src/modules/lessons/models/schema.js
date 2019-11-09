import { model, Schema } from 'mongoose'

import { uniqueValidator } from '../../../support/validations'

import MODEL from './model'

const name = 'lessons'

const schema = new Schema(MODEL, {
  timestamps: true
})

uniqueValidator(schema)

const SCHEMA = model(name, schema, name)

export default SCHEMA
