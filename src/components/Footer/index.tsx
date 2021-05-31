import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>Nome: Tabela Padrão</p>
      <p>Parcela: 2</p>

      <p>Valor da Parcela: R$1.150,00</p>
      <Button>
        <Link to="/applyforloan">Avançar</Link>
      </Button>
    </Container>
  );
};

export default Footer;
