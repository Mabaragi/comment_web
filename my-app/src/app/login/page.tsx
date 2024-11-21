'use client';
import { useState } from 'react';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { useLogin } from '@/hooks/useLogin';
export default function LoginPage() {
  const {
    email,
    emailError,
    password,
    PasswordError,
    onEmailChange,
    onPasswordChange,
    handleLogin,
  } = useLogin();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-sm mt-20">
          <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
          <form onSubmit={handleLogin}>
            <TextInput
              id="email"
              name="email"
              label="이메일"
              value={email}
              placeholder="이메일을 입력하세요"
              onChange={onEmailChange}
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
              error={PasswordError}
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
