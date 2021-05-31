import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import iconFilling from '../../assets/iconFilling.svg';

import Header from '../../components/Header';
import {
  Container,
  TitleContainer,
  TitleIMage,
  TitleText,
  Content,
  ContentCard,
  CardInfoContent,
  CardInfoText,
  CardInfoName,
  CardInfoNumberContainer,
  CardInfoNumber,
  CardInfoDate,
  CardInfoCVC,
  CardImageContent,
  CardImageText,
  CardImageInput,
  CardImageAttention,
  ButtonCard,
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
          <ContentCard>
            <CardInfoContent>
              <CardInfoText>Insira os dados do Cartão:</CardInfoText>
              <CardInfoName placeholder="Name" />
              <CardInfoNumberContainer>
                <CardInfoNumber placeholder="000000000000000" />
                <RiVisaFill />
              </CardInfoNumberContainer>
              <CardInfoDate placeholder="00/00" />
              <CardInfoCVC placeholder="000" />
            </CardInfoContent>
            <CardImageContent>
              <CardImageText>Faça upload dos anexos do cartão:</CardImageText>
              <CardImageInput>
                <p>Cartão de Crédito (Frente)</p>
                <a href="/">Adicionar</a>
              </CardImageInput>
              <CardImageInput>
                <p>Cartão de Crédito (Verso)</p>
                <a href="/">Adicionar</a>
              </CardImageInput>
              <CardImageInput>
                <p>Selfie com o Cartão de Crédito</p>
                <a href="/">Adicionar</a>
              </CardImageInput>
              <CardImageAttention>
                <p>
                  Atenção: As fotos devem estar legíveis, com <br />
                  todas as informações visíveis do cartão
                </p>
              </CardImageAttention>
            </CardImageContent>
          </ContentCard>
          <ButtonCard>
            <Link to="/applyforloan2">Continuar</Link>
          </ButtonCard>
        </Content>
      </Container>
    </>
  );
};

export default ApplyForLoan;
