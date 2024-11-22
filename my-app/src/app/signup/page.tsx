'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/schemas/user';
import TextInput from '../components/TextInput';
export default function SignupPage() {
  // 1. Zod 스키마를 기반으로 타입 추론
  type SignupForm = z.infer<typeof signupSchema>;

  // 2. react-hook-form 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema), // Zod를 통한 유효성 검증
  });
  const onSubmit = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
      <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          회원가입
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            id="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            {...register('email')} // react-hook-form과 연결
            error={errors.email?.message} // 에러 메시지 출력
          />
          <TextInput
            id="name"
            label="이름"
            {...register('name')}
            placeholder="이름을 입력하세요"
            error={errors.name?.message}
          />
          <TextInput
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...register('password')}
            error={errors.password?.message}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            가입하기
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          이미 계정이 있으신가요?{' '}
          <a href="/login" className="text-yellow-500 hover:underline">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
}
