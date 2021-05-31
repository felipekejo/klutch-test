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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 700;
    font-size: 21px;
    font-style: italic;
    margin-left: 25px;
  }
`;

export const SuccessText = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 23px;
`;
export const UserInterestRateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 33px;
`;
export const UserContainer = styled.div`
  h4 {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  height: 96px;
  background-color: #e8ffe4;
  border-radius: 5px;
  span {
    color: #777;
  }
`;
export const InterestRateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  height: 96px;
  background-color: #e8ffe4;
  border-radius: 5px;
  margin-left: 20px;
`;

export const Containers = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 33px;
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  height: 96px;
  background-color: #e8ffe4;
  border-radius: 5px;
  p {
    font-size: 21px;
    font-weight: 700;
    color: #777;
    font-style: italic;
  }
  svg {
    width: 38px;
    height: 29px;
    margin-left: 23px;
    margin-right: 23px;
  }
`;

export const InstallmentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  height: 96px;
  background-color: #e8ffe4;
  border-radius: 5px;
  margin-left: 20px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 613px;
  height: 96px;
  background-color: #e8ffe4;
  border-radius: 5px;
  & + div {
    margin-left: 20px;
  }
`;
export const ContainerCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p.mobile {
    color: #777;
    font-size: 21px;
    font-weight: 700;
  }
  p.interest {
    color: #ef9c4b;
    font-size: 30px;
    font-weight: 700;
  }
  p.installment {
    color: #ef9c4b;
    font-size: 38px;
    font-weight: 700;
  }
  p.value {
    color: #31ac2b;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
  }
  p.intallmentvalue {
    font-style: italic;
    color: #31ac2b;
    font-size: 30px;
  }
  svg {
    width: 38px;
    height: 29px;
    margin-left: 23px;
    margin-right: 23px;
  }
`;
export const ButtonDetail = styled.div`
  background-color: #228a95;
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
  height: 94px;
  width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const CredFicaInfo = styled.p`
  margin-top: 17px;
  font-size: 18px;
`;
