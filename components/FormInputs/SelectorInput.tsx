import React, { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// Define the shape of the `options` prop
interface Option {
  value: string | number; // Allows string or number values
  label: string; // Label for the dropdown option
}

// Define the props for the SelectorInput component
interface SelectorInputProps {
  label: string; // Label for the select input
  name: string; // Name and ID for the select input
   register: UseFormRegisterReturn; // React Hook Form's `register` function
  className?: string; // Optional custom className
  options: Option[]; // Array of options for the select dropdown
}

// Functional Component with TypeScript
export const SelectorInput: FC<SelectorInputProps> = ({
  label,
  name,
  register,
  className = 'sm:col-span-6', // Default value for className
  options = [],
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register}
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
