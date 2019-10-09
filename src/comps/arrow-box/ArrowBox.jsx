import React from 'react';
import { connect } from 'react-redux';
import { ArrowContainer } from './arrowBoxStyles';
import { changeImage } from '../../actions/userActions';

const ArrowBox = ({ changeImage }) => {
  return (
    <ArrowContainer>
      <i onClick={changeImage} className='fas fa-arrow-left'></i>
      <i onClick={changeImage} className='fas fa-arrow-right'></i>
    </ArrowContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { changeImage }
)(ArrowBox);
