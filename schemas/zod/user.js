import { z } from 'zod'

const userSchema = z.object({
  username: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }).min(3).max(30).trim()
})

export const validateUser = (input) => userSchema.safeParse(input)
