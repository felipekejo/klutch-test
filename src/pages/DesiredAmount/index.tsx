import React from 'react';

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

const DesireAmount: React.FC = () => {
  // const addTable = useCallback(() => {
  //   return (

  //   );
  // }, []);
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
            />
            <ButtonForm>Calcular</ButtonForm>
          </ContentForm>
          <SelectTableContainer>
            <SelectContainer>
              <Select>
                <div />
              </Select>
            </SelectContainer>
            <TableInstallment />
          </SelectTableContainer>
          <SelectTableContainer>
            <SelectContainer>
              <Select>
                <div />
              </Select>
            </SelectContainer>
            <TableInstallment />
          </SelectTableContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export default DesireAmount;
