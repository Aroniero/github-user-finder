import { useState } from 'react';

export const useHomeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements['name'].value;

    if (inputValue === '') {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 2000);
    } else {
      setSubmitted(inputValue);
    }
  };

  return [submitted, handleSubmit, inputError];
};
