/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import ShapeButton from '@Component/Drawing/ButtonList/ShapeButton';
import { SHAPE_TAG_OBJECT } from '@Global/enum';

import ImageIOContainer from './ImageIOContainer';
import UndoRedoContainer from './UndoRedoContainer';
import Container from './style';

export default function ButtonList(): JSX.Element {
  const { shapeTag } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();

  return (
    <Container>
      <ImageIOContainer />
      {Object.values(SHAPE_TAG_OBJECT).map((text) => (
        <ShapeButton key={text} text={text} />
      ))}
      <UndoRedoContainer />
    </Container>
  );
}
