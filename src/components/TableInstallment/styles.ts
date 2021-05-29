import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SelectTableContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #b5b5b5;
  border-collapse: collapse;
  border-radius: 5px;
  width: 1291px;
`;
export const SelectContainer = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
`;
export const Select = styled.div`
  border: 1px solid #b5b5b5;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #fff;
  padding: 6px;
  margin-left: 15px;

  div {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #b5b5b5;
  }
`;
export const TableContainer = styled.form`
  width: 100%;
`;
export const TableTitleContainer = styled.div`
  text-align: center;
  background: #f8f8f8;
  height: 63px;
  h1 {
    color: #228a95;
    font-weight: 700;
    font-size: 29px;
  }
`;

export const Table = styled.table`
  border-top: 0px;
  width: 100%;
  border-collapse: collapse;
  tr {
    height: 62px;
    color: #777777;
  }
  th {
    border-width: 0 1px 1px 1px;
    border-style: solid;
    text-align: center;
    border-color: #b5b5b5;
    background: #f8f8f8;
    padding: 5px 30px;
    font-weight: 700;
  }
  td {
    border-width: 0 1px 1px 1px;
    border-color: #b5b5b5;
    border-style: solid;
    text-align: center;
  }
`;
