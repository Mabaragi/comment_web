import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string | null;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  type = 'text',
  error,
  ...rest
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={id}
        className={`block text-gray-700 font-medium mb-2 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
