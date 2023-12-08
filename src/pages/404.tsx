import styled from 'styled-components';

export const NotFound = () => {
  return <Error>notFound 404</Error>;
};

const Error = styled('div')`
  color: ${({ theme }) => theme.colors.primary.main};
`;
