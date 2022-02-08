import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreType } from '@Redux/index';
import { setShapeZoomPercent } from '@Redux/shape/action';
import Container from './style';

export default function ZoomBox(): JSX.Element {
  const { zoomPercent } = useSelector((state: RootStoreType) => state.shapeReducer);

  const disPatch = useDispatch();

  const zoom = `${zoomPercent}%`;

  return (
    <Container>
      <button type="button" onClick={() => disPatch(setShapeZoomPercent(zoomPercent + 10))}>
        {' + '}
      </button>
      <span>{zoom}</span>
      <button type="button" onClick={() => disPatch(setShapeZoomPercent(zoomPercent - 10))}>
        {' - '}
      </button>
    </Container>
  );
}
