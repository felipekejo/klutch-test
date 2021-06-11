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
  const [selectCPF, setSelectCPF] = useState<string | undefined>();

  const [clients, setClients] = useState<Client[]>([]);
  const [clientFound, setClientFound] = useState<Client[]>(() => {
    const storageClientFound = localStorage.getItem('@Klutch:clientFound');
    if (storageClientFound) {
      return JSON.parse(storageClientFound);
    }
    return [];
  });

  const handleCPF = useCallback(() => {
    const searchClient = clients.filter(client => selectCPF === client.cpf);
    setClientFound(searchClient);
  }, [selectCPF, clients]);

  useEffect(() => {
    api.get<Client[]>('/client').then(response => {
      setClients(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('@Klutch:clientFound', JSON.stringify(clientFound));
  }, [clientFound]);

  console.log(selectCPF);
  console.log(clients);
  console.log(clientFound);

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
          {clientFound &&
            clientFound.map(client => (
              <ClientFoundContainer key={client.id}>
                <ClientFoundTitle>Cliente Encontrado:</ClientFoundTitle>
                <ClientFoundCPF>{client.cpf}</ClientFoundCPF>
                <ClientFoundName>{client.name}</ClientFoundName>
                <ClientFoundButton>
                  <Link to="/applyforloan1">Solicitar</Link>
                </ClientFoundButton>
              </ClientFoundContainer>
            ))}
        </Content>
      </Container>
    </>
  );
};

export default ApplyForLoan;
