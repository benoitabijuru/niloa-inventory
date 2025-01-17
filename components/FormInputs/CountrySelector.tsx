import React, { FC, useState, useMemo } from 'react';
import Select, { SingleValue } from 'react-select';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface CountryOption {
  value: string;
  label: string;
}

interface CountrySelectorProps {
  id: string;
  label: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  onChange?: (value: string) => void; // Add an `onChange` prop
}

const countryList: CountryOption[] = [
  { value: 'AF', label: 'Afghanistan' },
  { value: 'AL', label: 'Albania' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'RW', label: 'Rwanda' },
  { value: 'US', label: 'United States' },
  { value: 'ZW', label: 'Zimbabwe' },
  // Add more countries as needed...
];

const CountrySelector: FC<CountrySelectorProps> = ({
  id,
  label,
  placeholder = 'Search and select a country...',
  register,
  error,
  onChange, // Receive the `onChange` prop
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return countryList;
    return countryList.filter((country) =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSelectionChange = (selectedOption: SingleValue<CountryOption>) => {
    if (selectedOption && onChange) {
      onChange(selectedOption.value); // Call the `onChange` prop
    }
  };

  const handleInputChange = (inputValue: string) => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Select
        id={id}
        options={filteredCountries}
        onChange={handleSelectionChange}
        onInputChange={handleInputChange}
        isSearchable={true}
        placeholder={placeholder}
        instanceId="country-selector"
        {...(register ? { onBlur: register.onBlur, name: register.name, ref: register.ref } : {})}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default CountrySelector;
