'use client';
import { useState } from 'react';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
export default function LoginPage() {
  const [email, setEmail] = useState(''); // 기본적으로 string 타입으로 추론함
  const [emailError, setEmailError] = useState<string | null>(null); // string 또는 null 타입으로
  const [password, setPassword] = useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = event.target.value;
    setEmail(newValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newValue)) {
      setEmailError('올바른 이메일을 입력하세요.');
    } else {
      setEmailError(null); // 오류가 없을 경우 null로 설정
    }
  };
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // 간단한 로그인 처리 로직
    if (username === 'admin' && password === 'password') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패: 아이디와 비밀번호를 확인하세요.');
    }
  };

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
              onChange={handleEmailChange}
              error={emailError}
            />
            <TextInput
              id="password"
              name="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
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
