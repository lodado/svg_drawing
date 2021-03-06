import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { setShapeTag } from '@Redux/shape/action';
import { ShapeTagType } from '@Global/enum';
import StyledDiv from './style';

interface Props {
  text: ShapeTagType;
}

export default function ShapeButton({ text }: Props): JSX.Element {
  const { shapeTag } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();

  return (
    <StyledDiv onClick={() => disPatch(setShapeTag(text))} currentTagName={shapeTag} text={text}>
      {text}
    </StyledDiv>
  );
}
