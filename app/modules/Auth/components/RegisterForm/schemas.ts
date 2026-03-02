import { EMAIL_REGEX } from '@/utils/validation/emailRegex'
import { PASSWORD_REGEX } from '@/utils/validation/passwordRegex'
import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().regex(EMAIL_REGEX, { message: 'Bad format of email' }),
  password: z
    .string()
    .min(8, { message: 'Too short minimum 6 words' })
    .regex(PASSWORD_REGEX, {
      message:
        'Password must be at least 8 characters long and contain at least one letter and one number',
    }),
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
})

export type RegisterInput = z.infer<typeof registerSchema>
