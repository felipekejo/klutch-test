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
`;
export const TextContent = styled.h1`
  margin-top: 68px;
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 33px;
`;
export const ContentForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;
  input {
    border-radius: 5px 0 0 5px;
    width: 353px;
  }
`;
export const ButtonForm = styled.button`
  height: 61px;
  width: 120px;
  background-color: #228a95;
  color: #fff;
  border: 0;
  border-radius: 0 5px 5px 0;
  font-weight: 700;
  font-size: 22px;
`;

export const ClientFoundContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f8f8f8;
  width: 473px;
  height: 355px;
  justify-content: center;
`;
export const ClientFoundTitle = styled.p`
  color: #777777;
  font-size: 33px;
  margin-bottom: 18px;
`;
export const ClientFoundCPF = styled.p`
  color: #ef9c4b;
  font-size: 33px;
  margin-bottom: 18px;
`;
export const ClientFoundName = styled.p`
  color: #228a95;
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const ClientFoundButton = styled.div`
  a {
    font-size: 39px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    height: 98px;
    width: 391px;
    background-color: #228a95;
    border-radius: 5px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
