/**
 * 이메일 형태를 검증하는 함수
 * @param password - 검증할 비밀번호 문자열
 * @returns 비밀번호가 유효하면 true, 그렇지 않으면 false
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 비밀번호가 유효한지 검증하는 함수
 *
 * 조건:
 * - 최소 8자 이상
 * - 최소 하나의 소문자
 * - 최소 하나의 숫자
 * - 최소 하나의 특수 문자 (@, $, !, %, *, ?, &)
 *
 * @param password - 검증할 비밀번호 문자열
 * @returns 비밀번호가 유효하면 true, 그렇지 않으면 false
 */
export const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
