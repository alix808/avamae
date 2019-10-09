import React from 'react';
import { connect } from 'react-redux';
import { FlexBox, FlexItem, ImgOne, ImgTwo } from './imageItemStyles';

const ImageItem = ({ user }) => {
  const { imageStatus } = user;

  return (
    <FlexBox>
      <FlexItem>{imageStatus ? <ImgOne /> : <ImgTwo />}</FlexItem>
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
