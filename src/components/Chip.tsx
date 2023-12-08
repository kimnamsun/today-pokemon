import React from 'react';
import styled, { css } from 'styled-components';
import { typeColorVariant } from '../styles/colors';

type Size = 'sm' | 'md';
export type ChipColors = typeColorVariant | 'primary';

export interface ChipProps {
  size?: Size;
  color?: ChipColors;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Chip = ({
  size = 'sm',
  color = 'primary',
  onClick,
  children,
  ...rest
}: ChipProps) => {
  return (
    <ChipContainer color={color} size={size} onClick={onClick} {...rest}>
      <ChipInner color={color}>{children}</ChipInner>
    </ChipContainer>
  );
};

const ChipContainer = styled('div')<{
  color: ChipColors;
  size: Size;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  vertical-align: middle;
  height: ${({ size }) => (size === 'md' ? '28px' : '24px')};
  border-radius: 14px;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0 ${({ theme }) => theme.spacing(5)};

  ${({ color }) => {
    return css`
      background-color: ${({ theme }) =>
        color === 'primary' ? theme.colors[color] : theme.colors.type[color]};
    `;
  }}
`;

const ChipInner = styled('div')`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  line-height: 16px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.grayScale.white};
`;
