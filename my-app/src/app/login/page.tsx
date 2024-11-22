'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/user';
import TextInput from '../components/TextInput';
export default function LoginPage() {
  // 1. Zod 스키마를 기반으로 타입 추론
  type SignupForm = z.infer<typeof loginSchema>;

  // 2. react-hook-form 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(loginSchema), // Zod를 통한 유효성 검증
  });
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-sm mt-20">
          <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
          {/* <h1>{process.env.DATABASE_URL}</h1> */}
          <form onSubmit={handleSubmit(() => {})}>
            <TextInput
              id="email"
              name="email"
              label="이메일"
              placeholder="이메일을 입력하세요"
              {...register}
              error={errors.email?.message}
            />
            <TextInput
              id="password"
              name="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register}
              error={errors.password?.message}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              로그인
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="/signup" className="text-blue-500 hover:underline text-sm">
              회원가입
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 My Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
