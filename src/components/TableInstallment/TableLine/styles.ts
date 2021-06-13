import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const LineTable = styled.tr<ContainerProps>`
  ${props =>
    props.isFocused &&
    css`
      background: #efdf4b;
    `}
`;
