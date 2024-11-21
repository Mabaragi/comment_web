'use client';

import { useState } from 'react';
import TextInput from '../components/TextInput';
import { useSignup } from '@/hooks/useSignup';
export default function SignupPage() {
  const {
    email,
    emailError,
    password,
    passwordError,
    onEmailChange,
    onPasswordChange,
    handleLogin,
  } = useSignup();

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
      <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          회원가입
        </h1>
        <form className="space-y-4">
          <TextInput
            id="email"
            name="email"
            label="이메일"
            value={email}
            onChange={onEmailChange}
            placeholder="이메일을 입력하세요"
            error={emailError}
          />
          <TextInput
            id="password"
            name="password"
            label="비밀번호"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="비밀번호를 입력하세요"
            error={passwordError}
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
