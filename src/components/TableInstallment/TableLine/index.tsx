import React, { useCallback, useState } from 'react';

import { LineTable } from './styles';

interface TableLineProps {
  installment: {
    id: number;
    installment: number;
    installmentInterest: number;
    installmentValue: number;
    fullValue: number;
    comission: number;
  };
}

const TableLine: React.FC<TableLineProps> = ({ installment }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleTRFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);
  return (
    <LineTable isFocused={isFocused} onClick={handleTRFocus}>
      <td>{installment.installment}</td>
      <td>{installment.installmentInterest}</td>
      <td>{installment.installmentValue}</td>
      <td>{installment.fullValue}</td>
      <td>{installment.comission}</td>
    </LineTable>
  );
};

export default TableLine;
