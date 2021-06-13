import React, { useEffect, useState } from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import Input from '../../components/Input';
import TableInstallment from '../../components/TableInstallment';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconFilling from '../../assets/iconFilling.svg';
import {
  Container,
  TitleContainer,
  TitleIMage,
  TitleText,
  Content,
  TextContent,
  ContentForm,
  ButtonForm,
  SelectTableContainer,
  SelectContainer,
  Select,
} from './styles';
import api from '../../services/api';

interface Installment {
  id: number;
  name: string;
  installments: [
    {
      id: number;
      installment: number;
      installmentInterest: number;
      installmentValue: number;
      fullValue: number;
      comission: number;
    },
  ];
}

const DesireAmount: React.FC = () => {
  const [amount, setAmount] = useState<string | undefined>();

  const [installments, setInstallments] = useState<Installment[]>([]);

  useEffect(() => {
    api.get<Installment[]>('/rateTable').then(response => {
      setInstallments(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Header />
        <TitleContainer>
          <FaPlusCircle />
          <TitleIMage src={iconFilling} alt="filling" />
          <TitleText>
            Simulação <br />
            de Taxas
          </TitleText>
        </TitleContainer>
        <Content>
          <TextContent>Valor desejado</TextContent>
          <ContentForm>
            <Input
              placeholder="R$0,00"
              mask="currency"
              min="300,00"
              max="10.000,00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <ButtonForm>Calcular</ButtonForm>
          </ContentForm>
          {installments.map(installment => {
            return (
              <SelectTableContainer key={installment.id}>
                <SelectContainer>
                  <Select>
                    <div />
                  </Select>
                </SelectContainer>
                <TableInstallment installment={installment} />
              </SelectTableContainer>
            );
          })}
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default DesireAmount;
