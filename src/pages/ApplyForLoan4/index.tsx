import React from 'react';
import { FaPlusCircle, FaCreditCard, FaCheck } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
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
  SuccessText,
  UserInterestRateContainer,
  UserContainer,
  UserDetails,
  InterestRateContainer,
  ContainerCheck,
  Containers,
  CardContainer,
  InstallmentContainer,
  ValueContainer,
  ButtonDetail,
  CredFicaInfo,
} from './styles';

const ApplyForLoan4: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <ContainerHeader>
            <FaPlusCircle />
            <TitleIMage src={iconFilling} alt="filling" />
            <TitleText>
              <p>Solicitar</p> <p>Empréstimo</p>
            </TitleText>
          </ContainerHeader>
        </TitleContainer>
        <Content>
          <SuccessText>Solicitação Realizada com Sucesso!</SuccessText>
          <UserInterestRateContainer>
            <UserContainer>
              <h4>Resumo da Solicitação</h4>
              <UserDetails>
                <span>João Paulo Guedes</span>
                <ContainerCheck>
                  <p className="mobile">71 9988-7766</p>
                  <FaCheck />
                </ContainerCheck>
              </UserDetails>
            </UserContainer>
            <InterestRateContainer>
              <span>Taxa de Juros</span>

              <ContainerCheck>
                <p className="interest">12%</p>
                <FaCheck />
              </ContainerCheck>
            </InterestRateContainer>
          </UserInterestRateContainer>
          <Containers>
            <CardContainer>
              <FaCreditCard />
              <p>4327</p>
              <RiVisaLine />
              <p>02/24</p>

              <FaCheck />
            </CardContainer>
            <InstallmentContainer>
              <span>Parcelas:</span>
              <ContainerCheck>
                <p className="installment">12</p>
                <FaCheck />
              </ContainerCheck>
            </InstallmentContainer>
          </Containers>
          <Containers>
            <ValueContainer>
              <span>Valor Desejado:</span>
              <ContainerCheck>
                <p className="value">R$7.200,00</p>
                <FaCheck />
              </ContainerCheck>
            </ValueContainer>
            <ValueContainer>
              <span>Valor da Parcela:</span>
              <ContainerCheck>
                <p className="intallmentvalue">R$433,33</p>
                <FaCheck />
              </ContainerCheck>
            </ValueContainer>
          </Containers>
          <ValueContainer>
            <span>Valor Total do Empréstimo:</span>
            <ContainerCheck>
              <p className="value">R$7.200,00</p>
              <FaCheck />
            </ContainerCheck>
          </ValueContainer>
          <ButtonDetail>
            <Link to="requestdetail">Detalhe da Solicitação</Link>
          </ButtonDetail>
          <CredFicaInfo>O CredFica avaliará a solicitação</CredFicaInfo>
        </Content>
      </Container>
    </>
  );
};

export default ApplyForLoan4;
