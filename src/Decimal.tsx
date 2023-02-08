import React, { useState } from "react";

interface Props {
  value?: number;
  onChange: (value: number) => void;
  className?: string;
}

export const DecimalInput: React.FC<Props> = ({ value, onChange, className }) => {
  const [inputValue, setInputValue] = useState(
    value === undefined ? "" : value.toString().replace(".", ",")
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const isValid =  /(\d+(?:\.\d+)?)|^$/.test(input);

    
    if (isValid) {
      setInputValue(input);
      onChange(parseFloat(input.replace(",", ".")));
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      className={className}
    />
  );
};
