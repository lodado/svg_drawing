import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorChangeHandler, ColorResult, HuePicker } from 'react-color';

import { setPixelColor } from '@Redux/shape/action';
import { RootStoreType } from '@Redux/index';
import PixelRangeBar from './PixelRangeBar';
import Container, { ColDiv } from './style';

export default function SelectOptionBar(): JSX.Element {
  const { pixelColor } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();

  const handleChangePicker: ColorChangeHandler = (color: ColorResult) => {
    disPatch(setPixelColor(color.hex));
  };

  return (
    <Container>
      <PixelRangeBar />
      <ColDiv>
        <span>{`color : ${pixelColor}`}</span>
        <HuePicker color={pixelColor} onChange={handleChangePicker} />
      </ColDiv>
    </Container>
  );
}
