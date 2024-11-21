import { FormEvent, useState } from 'react';
import { validateEmail } from '@/utils/validations';
import { handleEmailChange, handlePasswordChange } from '@/utils/inputHandler';

export const useSignup = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return {
    handleLogin,
  };
};
