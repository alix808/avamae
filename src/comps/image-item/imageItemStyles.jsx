import styled from 'styled-components';
import img from '../../assets/shutterstock_407632243.jpg';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const Img = styled.div`
  background: url(${img}) no-repeat 50% 25% / cover;
  height: 440px;
`;
