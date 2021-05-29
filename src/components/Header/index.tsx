import React from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <FiAlignJustify />
      <img src={logoImg} alt="logo" />
    </Container>
  );
};
export default Header;
