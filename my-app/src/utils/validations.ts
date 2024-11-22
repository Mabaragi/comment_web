export abstract class Validator {
  protected abstract regex: RegExp;
  protected abstract errorMessage: string;

  validate = (value: string): string | null => {
    return this.regex.test(value) ? null : this.errorMessage;
  };
}

/**
 * 이메일이 유효한지 검증
 */
export class EmailValidator extends Validator {
  regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorMessage = '유효한 이메일을 입력해주세요.';
}

/**
 * 비밀번호가 유효한지 검증
 *
 * 조건:
 * - 최소 8자 이상
 * - 최소 하나의 소문자
 * - 최소 하나의 숫자
 * - 최소 하나의 특수 문자 (@, $, !, %, *, ?, &)
 */
export class PasswordValidator extends Validator {
  regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  errorMessage = '유효한 비밀번호를 입력해주세요.';
}

/**
 * 닉네임 유효한지 검증
 *
 * 조건:
 * - 최소 2자 이상 10자 이하
 * - 알파벳, 한글, 숫자만 가능
 */
export class NameValidator extends Validator {
  regex = /^[a-zA-Z가-힣0-9]{2,10}$/;
  errorMessage = '유효한 이름을 입력해주세요.';
}
