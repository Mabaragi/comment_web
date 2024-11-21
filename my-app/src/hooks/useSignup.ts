import { FormEvent, useState } from 'react';
import { validateEmail } from '@/utils/validations';
import { handleEmailChange, handlePasswordChange } from '@/utils/inputHandler';

export const useSignup = () => {
  const [email, setEmail] = useState(''); // 기본적으로 string 타입으로 추론함
  const [emailError, setEmailError] = useState<string | null>(null); // string 또는 null 타입으로
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null); // string 또는 null 타입으로

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleEmailChange({
      event,
      setEmail,
      setEmailError,
    });
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange({
      event,
      setPassword,
      setPasswordError,
    });
  };
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 간단한 로그인 처리 로직
    if (email === 'admin@gmail.com' && password === 'password') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패: 아이디와 비밀번호를 확인하세요.');
    }
  };
  return {
    email,
    emailError,
    password,
    passwordError,
    onEmailChange,
    onPasswordChange,
    handleLogin,
  };
};
