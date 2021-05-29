import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';
import Input from '../../components/Input';

import {
  Container,
  TitleContainer,
  TitleIMage,
  TitleText,
  Content,
  TextContent,
  ContentForm,
  ButtonForm,
  ClientFoundContainer,
  ClientFoundTitle,
  ClientFoundCPF,
  ClientFoundName,
  ClientFoundButton,
} from './styles';

const ApplyForLoan: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <TitleContainer>
          <FaPlusCircle />
          <TitleIMage src={iconFilling} alt="filling" />
          <TitleText>
            Solicitar <br />
            Empréstimo
          </TitleText>
        </TitleContainer>
        <Content>
          <TextContent>Busque o cliente</TextContent>
          <ContentForm>
            <Input placeholder="000.000.000-00" mask="cpf" />
            <ButtonForm>Buscar</ButtonForm>
          </ContentForm>

          <ClientFoundContainer>
            <ClientFoundTitle>Cliente Encontrado:</ClientFoundTitle>
            <ClientFoundCPF>074.119.005-93</ClientFoundCPF>
            <ClientFoundName>Lara Test</ClientFoundName>
            <ClientFoundButton>Solicitar</ClientFoundButton>
          </ClientFoundContainer>
        </Content>
      </Container>
    </>
  );
};

export default ApplyForLoan;
