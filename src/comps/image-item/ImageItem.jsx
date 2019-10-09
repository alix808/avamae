import React from 'react';
import { connect } from 'react-redux';
import { FlexBox, FlexItem, ImgOne, ImgTwo } from './imageItemStyles';
import img1 from '../../assets/shutterstock_407632243.jpg';
import img2 from '../../assets/shutterstock_696636346.jpg';

const ImageItem = ({ user }) => {
  const { imageStatus } = user;

  return (
    <FlexBox>
      <FlexItem>
        {imageStatus ? (
          <ImgOne background={img1} />
        ) : (
          <ImgTwo background={img2} />
        )}
      </FlexItem>
    </FlexBox>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(ImageItem);
