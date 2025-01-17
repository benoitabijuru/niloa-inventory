import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  isRequired:boolean;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  isRequired = true,
  register,
  error,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        required={isRequired}
        {...register}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
