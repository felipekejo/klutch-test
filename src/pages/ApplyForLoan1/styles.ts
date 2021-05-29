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
export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 105px;
  margin-right: 58px;
  input {
    border: 0;
    background-color: #f8f8f8;
    color: #777777;
    padding-left: 27px;
    font-size: 18px;
  }
`;
export const CardInfoText = styled.p`
  margin-bottom: 29px;
  font-size: 21px;
`;
export const CardInfoName = styled.input`
  height: 74px;
  width: 472px;
  margin-bottom: 27px;
  border-radius: 5px;
`;
export const CardInfoNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #f8f8f8;
  margin-bottom: 27px;
  border-radius: 5px;
  height: 74px;
  width: 472px;

  svg {
    margin-right: 14px;
    width: 60px;
    height: 39px;
  }
`;
export const CardInfoNumber = styled.input``;
export const CardInfoDate = styled.input`
  height: 74px;
  width: 472px;
  margin-bottom: 27px;
  border-radius: 5px;
`;
export const CardInfoCVC = styled.input`
  height: 74px;
  width: 472px;
  border-radius: 5px;
`;

export const CardImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 105px;
`;

export const CardImageText = styled.p`
  margin-bottom: 29px;
  font-size: 21px;
`;
export const CardImageInput = styled.div`
  height: 74px;
  width: 472px;
  margin-bottom: 27px;
  border-radius: 5px;
  background-color: #f8f8f8;
  color: #777777;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  p {
    margin-left: 27px;
    font-weight: 700;
  }
  a {
    margin-right: 28px;
  }
`;

export const CardImageAttention = styled.div`
  height: 74px;
  width: 472px;
  display: flex;

  align-items: center;
  font-size: 21px;
  border-radius: 5px;
`;

export const ButtonCard = styled.button`
  margin-top: 69px;
  width: 390px;
  height: 98px;
  background-color: #228a95;
  font-size: 39px;
  font-weight: 700;
  color: #fff;
  border: 0;
  border-radius: 5px;
  margin-bottom: 80px;
`;
