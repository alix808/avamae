import styled from 'styled-components';
import img1 from '../../assets/shutterstock_407632243.jpg';
import img2 from '../../assets/shutterstock_696636346.jpg';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const ImgOne = styled.div`
  background: url(${img1}) no-repeat 50% 25% / cover;
  height: 440px;
`;

export const ImgTwo = styled.div`
  background: url(${img2}) no-repeat 50% 50% / cover;
  height: 440px;
`;
