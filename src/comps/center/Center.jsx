import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox } from './centerStyles';

const Center = ({ component: Component, ...props }) => {
  return (
    <FlexBox>
      <Component {...props} />
    </FlexBox>
  );
};

Center.propTypes = {
  Component: PropTypes.element
};

export default Center;
