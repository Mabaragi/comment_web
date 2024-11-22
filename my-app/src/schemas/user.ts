import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요.'),
  name: z
    .string()
    .min(2, '2자 이상이어야 합니다.')
    .max(10, '10자 이하여야 합니다.')
    .regex(/^[a-zA-Z]+$/, '공백이나 특수문자를 제거해주세요.'),
  password: z
    .string()
    .min(8, '8자 이상어야아 합니다.')
    .regex(/[@$!%*?&]/, '특수문자 하나를 반드시 포함해 주세요.'),
});
