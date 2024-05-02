import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  division: String,
  location: String
})

export const Person = mongoose.model('Person', personSchema)
