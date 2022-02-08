import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './style';
import PixelRangeBar from './PixelRangeBar';

export default function SelectOptionBar(): JSX.Element {
  return (
    <Container>
      <PixelRangeBar />
    </Container>
  );
}
