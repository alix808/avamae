import styled from 'styled-components';

export const FlexBox = styled.div`
  height: 440px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImageContainerOne = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 25%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BackgroundImageContainerTwo = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
