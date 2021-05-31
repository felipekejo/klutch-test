import styled from 'styled-components';

export const Container = styled.footer`
  height: 86px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #228a95;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    margin-right: 45px;
    font-weight: 700;
    font-size: 30px;
  }
`;

export const Button = styled.div`
  a {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    background-color: #ef9c4b;
    height: 53px;
    width: 160px;
    border-radius: 5px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
