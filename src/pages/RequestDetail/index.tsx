import React from 'react';
import { FaPlusCircle, FaFile, FaCreditCard } from 'react-icons/fa';
import { RiErrorWarningFill, RiCheckboxCircleFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';

import {
  Container,
  TitleContainer,
  ContainerHeader,
  TitleIMage,
  TitleText,
  Content,
  GridLeft,
  GridRight,
  TitleCredFica,
  TotalValueContainer,
  TotalValueToPayContainer,
  FrontCardContainer,
  BackCardContainer,
  SelfieCardContainer,
  SolicitationContainer,
  PaymentInformationContainer,
  PaymentInformation,
  CardContainer,
  UserContainer,
  GeneralInformationContainer,
  Information,
  WaitingContainer,
  Containers,
  PreApproving,
  Fail,
} from './styles';

const RequestDetail: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <ContainerHeader>
            <FaPlusCircle />
            <TitleIMage src={iconFilling} alt="filling" />
            <TitleText>
              <p>Detalhe de</p> <p>Solicitação</p>
            </TitleText>
          </ContainerHeader>
        </TitleContainer>
        <Content>
          <GridLeft>
            <TitleCredFica>
              <p>
                Solicitação gerada por <span>Sistema CredFica</span>
              </p>
            </TitleCredFica>
            <TotalValueContainer>
              <h5>Valor total</h5>
              <p>R$ 6.000,00</p>
            </TotalValueContainer>
            <TotalValueToPayContainer>
              <h5>Valor a depositar</h5>
              <p>R$ 6.000,00</p>
            </TotalValueToPayContainer>
            <FrontCardContainer>
              <h5>Frente do Cartão</h5>
              <FaFile />
              <Link to="/">Ver Comprovante</Link>
            </FrontCardContainer>
            <BackCardContainer>
              <h5>Verso do Cartão</h5>
              <FaFile />
              <Link to="/">Ver Comprovante</Link>
            </BackCardContainer>
            <SelfieCardContainer>
              <h5>Selfie com Cartão</h5>
              <FaFile />
              <Link to="/">Ver Comprovante</Link>
            </SelfieCardContainer>
          </GridLeft>
          <GridRight>
            <SolicitationContainer>
              <p>
                Fluxo da Solicitação: <span>Manual</span>
              </p>
            </SolicitationContainer>
            <PaymentInformationContainer>
              <h5>Modalidade:</h5>
              <PaymentInformation>
                <CardContainer>
                  <h4>Cartão Crédito</h4>
                  <FaCreditCard />
                </CardContainer>
                <p>Número do Cartão: 5252 0565 6526 6552</p>
                <p>Validade: 03/27 CVC: 254</p>
                <p>
                  1 parcelas de: <span>R$ 2000,00</span>
                </p>
                <p>Tabela: Tabela padrão </p>
              </PaymentInformation>
            </PaymentInformationContainer>
            <UserContainer>
              <h5>Informações do Cliente:</h5>
              <p>Nome: Lara B Esquivel</p>
              <p>CPF: 866.666.965-87</p>
              <p>Agência: 1235</p>
              <p>Banco: 029 - Banco Itaú Consignado S.A. </p>
              <p>Tipo de Conta: Poupança</p>
              <p>Número da conta: 222245</p>
            </UserContainer>
            <GeneralInformationContainer>
              <h5>Informações Gerais:</h5>
              <Information>
                <p>Data: 09/03/2020</p>
                <WaitingContainer>
                  <RiErrorWarningFill />
                  Aguardando
                </WaitingContainer>
                <Containers>
                  <PreApproving>
                    <RiCheckboxCircleFill />
                    Pré Aprovar
                  </PreApproving>
                  <Fail>
                    <RiErrorWarningFill />
                    Reprovar
                  </Fail>
                </Containers>
              </Information>
            </GeneralInformationContainer>
          </GridRight>
        </Content>
      </Container>
    </>
  );
};

export default RequestDetail;
