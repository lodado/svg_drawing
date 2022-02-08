import React from 'react';

import ShapeButton from '@Component/Drawing/ButtonList/ShapeButton/ShapeButton';

import ImageIOContainer from './ImageIOContainer';
import UndoRedoContainer from './UndoRedoContainer';
import Container from './style';

export default function ButtonList(): JSX.Element {
  return (
    <Container>
      <ImageIOContainer />
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <UndoRedoContainer />
    </Container>
  );
}
