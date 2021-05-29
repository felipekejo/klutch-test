import React from 'react';

import {
  Container,
  SelectTableContainer,
  TableTitleContainer,
  TableContainer,
  SelectContainer,
  Select,
  Table,
} from './styles';

const TableInstallment: React.FC = () => {
  return (
    <Container>
      <SelectTableContainer>
        <SelectContainer>
          <Select>
            <div />
          </Select>
        </SelectContainer>
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
      </SelectTableContainer>

      <SelectTableContainer>
        <SelectContainer>
          <Select>
            <div />
          </Select>
        </SelectContainer>
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
      </SelectTableContainer>
    </Container>
  );
};

export default TableInstallment;
