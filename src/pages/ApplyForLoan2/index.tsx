import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';

import {
  Container,
  TitleContainer,
  TitleIMage,
  TitleText,
  Content,
  TextContent,
  ButtonCard,
  PayrollLoansContainer,
  PayrollLoans,
} from './styles';

const ApplyForLoan2: React.FC = () => {
  return (
    <Container>
      <Header />
      <TitleContainer>
        <FaPlusCircle />
        <TitleIMage src={iconFilling} alt="filling" />
        <TitleText>
          Solicitar <br />
          Empréstimo
        </TitleText>
      </TitleContainer>
      <Content>
        <TextContent>Escolha a modalidade:</TextContent>

        <ButtonCard>Cartão de Crédito</ButtonCard>
        <p>Ou</p>
        <PayrollLoansContainer>
          <PayrollLoans>Crédito Consignado</PayrollLoans>
          <p>Em Breve</p>
        </PayrollLoansContainer>
      </Content>
    </Container>
  );
};

export default ApplyForLoan2;
