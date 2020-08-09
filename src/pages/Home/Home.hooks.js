import { useState } from 'react';

export const useHomeForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(e.target.elements['name'].value);
  };

  return [submitted, handleSubmit];
};
