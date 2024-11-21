/**
 * 이메일 형태를 검증하는 함수
 * @param email - 검증할 이메일 문자열
 * @returns 유효하면 null, 유효하지 않으면 에러 메시지
 */
export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return '유효한 이메일을 입력해주세요.';
  }
  return null;
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
export const validatePassword = (password: string): string | null => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return '유효한 이메일을 입력해주세요.';
  }
  return null;
};
