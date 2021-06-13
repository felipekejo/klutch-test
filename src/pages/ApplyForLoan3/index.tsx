import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';

import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';
import TableInstallment from '../../components/TableInstallment';

import {
  Container,
  TitleContainer,
  ContainerHeader,
  TitleIMage,
  TitleText,
  Content,
  TableSelectorContainer,
  LoanValueContainer,
  GreenContainer,
  ValueContainer,
  InstallmentsContainer,
  GreyContainer,
  InstallmentValue,
  InstallmentsValueContainer,
  ButtonsContainer,
  ContractContainer,
  TitleContractType,
  ContractTypeButtons,
  ContractButton,
  SubmitButton,
} from './styles';

const ApplyForLoan3: React.FC = () => {
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
          <TableSelectorContainer>
            <p>Tabela</p>
            <select name="table" id="table">
              <option value="Tabela padrão">Tabela padrão</option>
              <option value="Tabela padrão">Tabela padrão</option>
              <option value="Tabela padrão">Tabela padrão</option>
            </select>
          </TableSelectorContainer>
        </TitleContainer>
        <Content />
        <LoanValueContainer>
          <GreenContainer>
            <p>Valor desejado:</p>
            <ValueContainer>
              <p>R$ 1.000,00</p>
            </ValueContainer>
          </GreenContainer>
          <GreenContainer>
            <p>Valor Total do Empréstimo:</p>
            <ValueContainer>
              <p>R$ 1.000,00</p>
            </ValueContainer>
          </GreenContainer>
        </LoanValueContainer>
        <InstallmentsContainer>
          <GreyContainer>
            <p>Parcelas:</p>
            <InstallmentValue>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </InstallmentValue>
          </GreyContainer>
          <GreyContainer>
            <p>Valor da Parcela:</p>
            <InstallmentsValueContainer>
              <p>R$ 1.000,00</p>
            </InstallmentsValueContainer>
          </GreyContainer>
        </InstallmentsContainer>
        <ButtonsContainer>
          <ContractContainer>
            <TitleContractType>Escolha o tipo de contrato:</TitleContractType>

            <ContractTypeButtons>
              <ContractButton>Automático</ContractButton>
              <ContractButton>Manual</ContractButton>
            </ContractTypeButtons>
          </ContractContainer>
          <SubmitButton>
            <Link to="/applyforloan4">
              <GoCheck />
              <p>Concluir</p>
            </Link>
          </SubmitButton>
        </ButtonsContainer>
        {/* <TableInstallment /> */}
      </Container>
    </>
  );
};

export default ApplyForLoan3;
