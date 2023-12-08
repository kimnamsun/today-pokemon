import styled from 'styled-components';
import { useGetPokemonList } from '../hooks/api/PokemonAPi';
import { Chip as ChipBase } from './Chip';

export const PokemonCard = () => {
  // const { data } = useGetPokemonList();

  // console.log({ data });

  return (
    <CardWrapper>
      {/* 이미지 */}
      <ImageContainer></ImageContainer>

      {/* 인포 */}
      <InfoContainer>
        <NameContainer>
          <Name>Squirlte</Name>
          <Type>Aqua</Type>
        </NameContainer>
        <Chip color="bug">Bug</Chip>
      </InfoContainer>
      <AbilitiesList></AbilitiesList>
    </CardWrapper>
  );
};

const CardWrapper = styled('div')`
  width: 400px;
  height: 600px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayScale.background};
  padding: ${({ theme }) => theme.spacing(5)};
`;

const ImageContainer = styled('div')`
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayScale.white};
`;

const InfoContainer = styled('div')`
  display: flex;
  padding: ${({ theme }) => theme.spacing(9)} ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: top;
`;

const NameContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Chip = styled(ChipBase)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

const Name = styled('span')`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayScale.dark};
`;

const Type = styled('span')`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grayScale.medium};
`;

const AbilitiesList = styled('div')``;
