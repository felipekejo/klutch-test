import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1218px;
  justify-content: space-between;
  margin-bottom: 68px;
  svg {
    height: 67px;
    width: 67px;
    margin-right: 38px;
    color: #228a95;
  }
`;
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleIMage = styled.img`
  width: 115px;
  height: 115px;
  margin-right: 38px;
`;
export const TitleText = styled.div`
  font-size: 56px;
  font-weight: 700;
  line-height: 55px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const GridLeft = styled.div`
  display: grid;
  grid-template-columns: 278px 278px;
  grid-template-rows: 79px 283px 283px 283px;
  grid-gap: 11px 30px;
  margin-right: 48px;
  h5 {
    font-size: 26px;
    color: #777;
    margin-bottom: 32px;
  }
  a {
    font-size: 21px;
    text-decoration: underline;
    color: #2d98b4;
    margin-top: 32px;
  }
  svg {
    height: 102px;
    width: 78px;
    color: #ef9c4b;
  }
  div {
    background-color: #f8f8f8;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleCredFica = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  p {
    font-size: 29px;
    color: #777;
  }
  span {
    font-weight: 700;
    color: #228a95;
  }
`;
export const TotalValueContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  flex-direction: column;
  p {
    font-size: 36px;
    color: #31ac2b;
    font-weight: 700;
    margin-bottom: 120px;
    margin-top: 13px;
  }
`;
export const TotalValueToPayContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  flex-direction: column;
  p {
    font-size: 36px;
    color: #31ac2b;
    font-weight: 700;
    margin-bottom: 120px;
    margin-top: 13px;
  }
`;
export const FrontCardContainer = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  flex-direction: column;
`;
export const BackCardContainer = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  flex-direction: column;
`;
export const SelfieCardContainer = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  flex-direction: column;
`;
export const GridRight = styled.div`
  display: grid;
  grid-template-columns: 586px;
  grid-template-rows: 79px 333px 333px 274px;
  grid-gap: 12px;
  div {
  }
  h5 {
    font-size: 20px;
    color: #777;
    margin-left: 35px;
  }
  p {
    font-size: 20px;
    color: #777;
    font-weight: 700;
    font-style: italic;
  }
`;
export const SolicitationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;

  p {
    font-size: 29px;
    font-weight: 500;
    margin-left: 19px;
    font-style: normal;
  }
  span {
    color: #228a95;
    font-weight: 700;
  }
`;
export const PaymentInformationContainer = styled.div`
  background-color: #f8f8f8;

  h5 {
    margin-top: 35px;
  }
`;
export const PaymentInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 28px;
  P {
    margin-top: 15px;
  }
  span {
    color: #31ac2b;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h4 {
    font-size: 25px;
    color: #777;
    font-weight: 700;
    margin-right: 23px;
    font-style: italic;
  }
  svg {
    height: 30px;
    width: 42px;
    color: #ef9c4b;
  }
`;
export const UserContainer = styled.div`
  background-color: #f8f8f8;

  h5 {
    margin-top: 23px;
    margin-bottom: 4px;
  }
  p {
    margin-top: 14px;
    margin-left: 35px;
  }
`;
export const GeneralInformationContainer = styled.div`
  background-color: #e8f3f4;
  h5 {
    margin-top: 17px;
  }
`;
export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;
export const WaitingContainer = styled.div`
  background-color: #ef9c4b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 282px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 700;
  margin: 24px 0;

  svg {
    height: 24px;
    width: 24px;
    margin-right: 9px;
  }
`;
export const Containers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 209px;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 700;
  }
`;
export const PreApproving = styled.div`
  background-color: #228a95;
  margin-right: 27px;
`;
export const Fail = styled.div`
  background-color: #bc3434;
`;
