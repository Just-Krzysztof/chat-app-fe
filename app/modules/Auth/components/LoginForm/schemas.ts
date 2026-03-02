import { EMAIL_REGEX } from '@/utils/validation/emailRegex'
import { PASSWORD_REGEX } from '@/utils/validation/passwordRegex'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().regex(EMAIL_REGEX, { message: 'Invalid credentials' }),
  password: z.string().min(8, { message: 'Too short minimum 6 words' }),
})

export type LoginInput = z.infer<typeof loginSchema>
