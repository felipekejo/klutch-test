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

export const TableSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  width: 472px;
  height: 97px;
  border-radius: 5px;

  p {
    margin-left: 20px;
    font-weight: 700;
    font-size: 22px;
  }

  select {
    height: 62px;
    width: 238px;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-right: 15px;
    border: 0;
    font-weight: 700;
    font-size: 25px;
    color: #ef9c4b;

    padding-left: 21px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 33px;
    color: #777;
  }
`;
export const LoanValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e8ffe3;
  width: 600px;
  height: 97px;
  border-radius: 5px;
  margin-bottom: 20px;

  & + div {
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    font-weight: 700;
    font-size: 22px;
  }
`;
export const ValueContainer = styled.div`
  height: 62px;
  width: 238px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-right: 15px;
  p {
    font-weight: 700;
    font-size: 25px;
    color: #ef9c4b;
  }
`;
export const InstallmentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GreyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  width: 600px;
  height: 97px;
  border-radius: 5px;
  & + div {
    margin-left: 20px;
  }
  p {
    margin-left: 20px;
    font-weight: 700;
    font-size: 22px;
  }
`;
export const InstallmentValue = styled.select`
  height: 62px;
  width: 238px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-right: 15px;
  border: 0;
  font-weight: 700;
  font-size: 25px;
  color: #ef9c4b;

  padding-left: 21px;
`;
export const InstallmentsValueContainer = styled.div`
  height: 62px;
  width: 238px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-right: 15px;
  p {
    font-weight: 700;
    font-size: 25px;
    color: #ef9c4b;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 61px;
`;
export const TitleContractType = styled.span`
  font-size: 21px;
`;

export const ContractContainer = styled.div`
  margin-right: 20px;
`;
export const ContractTypeButtons = styled.div`
  margin-top: 30px;
`;
export const ContractButton = styled.button`
  width: 300px;
  height: 98px;
  background-color: #228a95;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 39px;
  font-weight: 700;
  & + button {
    background-color: #fff;
    color: #228a95;
  }
`;
export const SubmitButton = styled.div`
  a {
    width: 600px;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #228a95;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 39px;
    font-weight: 700;
    text-decoration: none;
    svg {
      margin-right: 23px;
    }
  }
`;
