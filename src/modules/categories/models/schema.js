import { model, Schema } from 'mongoose'

import { uniqueValidator, existsValidator } from '../../../support/validations'

import MODEL from './model'

const name = 'categories'

const schema = new Schema(MODEL, {
  timestamps: true
})

uniqueValidator(schema)
existsValidator(schema)

const SCHEMA = model(name, schema, name)

export default SCHEMA
