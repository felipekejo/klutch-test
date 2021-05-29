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
  svg {
    height: 67px;
    width: 67px;
    margin-right: 38px;
    color: #228a95;
  }
`;

export const TitleIMage = styled.img`
  width: 115px;
  height: 115px;
  margin-right: 38px;
`;
export const TitleText = styled.span`
  font-size: 56px;
  font-weight: 700;
  line-height: 55px;
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
export const TextContent = styled.h1`
  margin-top: 68px;
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 33px;
`;
export const ButtonCard = styled.button`
  width: 391px;
  height: 98px;
  background-color: #228a95;
  color: #fff;
  text-align: center;
  border: 0;
  border-radius: 5px;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 21px;
`;
export const PayrollLoansContainer = styled.div`
  width: 391px;

  p {
    font-size: 25px;
    color: #777777;
    text-align: right;
  }
`;
export const PayrollLoans = styled.button`
  width: 391px;
  height: 98px;
  background-color: #228a95;
  color: #fff;
  opacity: 0.4;
  text-align: center;
  border: 0;
  border-radius: 5px;
  font-size: 35px;
  font-weight: 700;
  margin-top: 30px;
`;
