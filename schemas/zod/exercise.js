import { z } from 'zod'

const exerciseSchema = z.object({
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string'
  }).min(1).trim(),
  duration: z.number({
    required_error: 'Duration is required',
    invalid_type_error: 'Duration must be a positive number'
  }).positive(),
  date: z.string({
    required_error: 'Date is required',
    invalid_type_error: 'Date must be a string'
  })
})

export const validateExercise = (input) => exerciseSchema.safeParse(input)
