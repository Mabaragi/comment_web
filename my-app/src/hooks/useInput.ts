import { useState } from 'react';

export const useInput = (
  initialValue: string,
  validator: (value: string) => string | null,
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null); // string 또는 null 타입으로

  //   const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     handleEmailChange({ event, setEmail, setEmailError });
  //   };
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = event.target.value;
    setError(validator(newValue));
    setValue(newValue);
  };

  return {
    value,
    error,
    handleValueChange,
  };
};
