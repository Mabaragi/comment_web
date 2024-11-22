export const useSignup = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return {
    handleLogin,
  };
};
