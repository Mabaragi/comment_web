export interface EmailInputHandler {
  event: React.ChangeEvent<HTMLInputElement>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface PasswordInputHandler {
  event: React.ChangeEvent<HTMLInputElement>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setPasswordError: React.Dispatch<React.SetStateAction<string | null>>;
}
