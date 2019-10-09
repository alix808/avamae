import React from 'react';

import {
  FlexBox,
  BackgroundImageContainerOne,
  BackgroundImageContainerTwo
} from './imageItemStyles';

const MenuItem = ({ imageUrl }) => (
  <FlexBox>
    <BackgroundImageContainerOne imageUrl={imageUrl} />
  </FlexBox>
);

export default MenuItem;
