import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  TableTitleContainer,
  TableContainer,
  Table,
} from './styles';
import TableLine from './TableLine';

interface TableInstallmentProps {
  installment: {
    id: number;
    name: string;
    installments: [
      {
        id: number;
        installment: number;
        installmentInterest: number;
        installmentValue: number;
        fullValue: number;
        comission: number;
      },
    ];
  };
}

// interface InstallmentInformation {
//   id: number;
//   name: string;
//   installments: [
//     {
//       id: number;
//       installment: number;
//       installmentInterest: number;
//       installmentValue: number;
//       fullValue: number;
//       comission: number;
//     },
//   ];
// }

const TableInstallment: React.FC<TableInstallmentProps> = ({
  installment: { name, installments },
}) => {
  return (
    <Container>
      <TableContainer>
        <TableTitleContainer>
          <h1>{name}</h1>
        </TableTitleContainer>
        <Table>
          <tr>
            <th>Parcela</th>
            <th>Juros da Parcela</th>
            <th>Valor da Parcela</th>
            <th>Valor total</th>
            <th>Comissão Parceiro</th>
          </tr>
          {installments.map(installment => {
            return <TableLine installment={installment} />;
          })}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableInstallment;
