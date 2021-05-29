import styled from 'styled-components';

export const Container = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
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
  font-weight: 700;
  font-size: 40px;
`;
export const ContentForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;
`;
export const ButtonForm = styled.button`
  height: 53px;
  width: 160px;
  margin-left: 30px;
  background-color: #ef9c4b;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-weight: 700;
`;
