import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';

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

interface Client {
  id: number;
  name: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

const ApplyForLoan: React.FC = () => {
  const [selectCPF, setSelectCPF] = useState('');

  const [clients, setClients] = useState<Client[]>([]);

  async function handleCPF(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.get<Client[]>(`client?cpf=${selectCPF}`);
      setClients(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(selectCPF);
  console.log(clients);

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
          <ContentForm onSubmit={handleCPF}>
            <Input
              placeholder="000.000.000-00"
              mask="cpf"
              value={selectCPF}
              onChange={e => setSelectCPF(e.target.value)}
            />
            <ButtonForm type="submit">Buscar</ButtonForm>
          </ContentForm>
          {clients ? (
            <ClientFoundContainer>
              <ClientFoundTitle>Cliente Encontrado:</ClientFoundTitle>
              <ClientFoundCPF>{clients.cpf}</ClientFoundCPF>
              <ClientFoundName>{clients}</ClientFoundName>
              <ClientFoundButton>
                <Link to="/applyforloan1">Solicitar</Link>
              </ClientFoundButton>
            </ClientFoundContainer>
          ) : (
            <></>
          )}
        </Content>
      </Container>
    </>
  );
};

export default ApplyForLoan;
