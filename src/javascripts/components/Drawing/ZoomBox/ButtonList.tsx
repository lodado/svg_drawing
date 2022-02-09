import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreType } from '@Redux/index';
import { setShapeZoomPercent } from '@Redux/shape/action';
import Container from './style';

export default function ZoomBox(): JSX.Element {
  const { zoomPercent } = useSelector((state: RootStoreType) => state.shapeReducer);

  const disPatch = useDispatch();

  const zoom = ` ${zoomPercent}%`.slice(-4);

  return (
    <Container>
      <button type="button" onClick={() => disPatch(setShapeZoomPercent(zoomPercent + 10))}>
        {' + '}
      </button>
      <pre>{zoom}</pre>
      <button type="button" onClick={() => disPatch(setShapeZoomPercent(zoomPercent - 10))}>
        {' - '}
      </button>
    </Container>
  );
}
