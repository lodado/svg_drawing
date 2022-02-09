/* eslint-disable implicit-arrow-linebreak */
import React from 'react';

import ShapeButton from '@Component/Drawing/ButtonList/ShapeButton';
import { SHAPE_TAG_OBJECT } from '@Global/enum';

import ImageIOContainer from './ImageIOContainer';
import UndoRedoContainer from './UndoRedoContainer';
import Container from './style';

export default function ButtonList(): JSX.Element {
  return (
    <Container>
      <UndoRedoContainer />
      {Object.values(SHAPE_TAG_OBJECT).map((text) => (
        <ShapeButton key={text} text={text} />
      ))}
      <ImageIOContainer />
    </Container>
  );
}
