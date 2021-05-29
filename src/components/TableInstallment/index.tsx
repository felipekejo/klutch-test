import React from 'react';

import {
  Container,
  TableTitleContainer,
  TableContainer,
  Table,
} from './styles';

const TableInstallment: React.FC = () => {
  return (
    <Container>
      <TableContainer>
        <TableTitleContainer>
          <h1>Tabela Padrão</h1>
        </TableTitleContainer>
        <Table>
          <tr>
            <th>Parcela</th>
            <th>Juros da Parcela</th>
            <th>Valor da Parcela</th>
            <th>Valor total</th>
            <th>Comissão Parceiro</th>
          </tr>
          <tr>
            <td>1</td>
            <td>20.5</td>
            <td>1338.76</td>
            <td>2677.51</td>
            <td>455.51</td>
          </tr>
          <tr>
            <td>2</td>
            <td>20.5</td>
            <td>1338.76</td>
            <td>2677.51</td>
            <td>455.51</td>
          </tr>
          <tr>
            <td>3</td>
            <td>20.5</td>
            <td>1338.76</td>
            <td>2677.51</td>
            <td>455.51</td>
          </tr>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableInstallment;
