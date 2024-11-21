import { validateEmail, validatePassword } from './validations';
import { EmailInputHandler, PasswordInputHandler } from './types';

/**
 *
 * 이메일 입력 변경 핸들러
 */
export const handleEmailChange = ({
  event,
  setEmail,
  setEmailError,
}: EmailInputHandler) => {
  event.preventDefault();
  const newValue = event.target.value;
  if (!validateEmail(newValue)) {
    setEmailError('유효한 이메일을 입력하세요.');
  } else {
    setEmailError(null);
  }
  setEmail(newValue);
};

export const handlePasswordChange = ({
  event,
  setPassword,
  setPasswordError,
}: PasswordInputHandler) => {
  event.preventDefault();
  const newValue = event.target.value;
  if (!validatePassword(newValue)) {
    setPasswordError('유효한 비밀번호를 입력하세요.');
  } else {
    setPasswordError(null);
  }
  setPassword(newValue);
};
