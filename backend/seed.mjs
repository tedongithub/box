import mongoose from 'mongoose'
import { dbUri } from '../config.js'
import { Person } from './model.js'

mongoose
  .connect(dbUri)
  .then(() => {
    Person.insertMany([
      {
        name: 'John Doe',
        email: 'john@example.com',
        division: 'Sales',
        location: 'New York'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        division: 'Marketing',
        location: 'Los Angeles'
      },
      {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        division: 'Engineering',
        location: 'San Francisco'
      }
    ])
      .then(() => {
        console.log('Success! Inserted seed data.')
        mongoose.connection.close()
      })
      .catch((err) => {
        console.error('Error inserting data:', err)
        mongoose.connection.close()
      })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
  })
