import React, { InputHTMLAttributes, useCallback } from 'react';
import { cpf, currency } from './masks';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: 'currency' | 'cpf';
}

const Input: React.FC<InputProps> = ({ mask, ...rest }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'currency') {
        currency(e);
      }
      if (mask === 'cpf') {
        cpf(e);
      }
    },
    [mask],
  );
  return (
    <Container>
      <input {...rest} onKeyUp={handleKeyUp} />
    </Container>
  );
};

export default Input;
