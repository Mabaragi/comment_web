import React from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 flex-col bg-gray-100 bg-yellow-100 items-center">
        <div className="w-full max-w-sm mt-20 border border-black rounded-lg">
          <h1 className="text-2xl text-center font-bold mb-6">회원가입</h1>
          <form action="">
            <label className="block">이메일</label>
            <input className="block w-full" type="text" />
            <label className="block">비밀번호</label>
            <input className="block w-full" type="text" />
          </form>
        </div>
      </main>
    </div>
  );
}
