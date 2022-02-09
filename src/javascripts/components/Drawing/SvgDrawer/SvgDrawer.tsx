/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootStoreType } from '@Redux/index';
import useShape from '@Hook/useShape';
import { RAPHAEL_HEIGHT, RAPHAEL_WIDTH } from '@Global/constant';

import Container, { WrapPaperDiv } from './style';

const DataList = ({ data, zoomPercent }): JSX.Element[] =>
  useMemo(
    () =>
      data.map((ele) => {
        if (ele.element === 'line') {
          return (
            <line
              key={ele.key}
              x1={ele.x1}
              y1={ele.y1}
              x2={ele.x2}
              y2={ele.y2}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
            />
          );
        }

        if (ele.element === 'circle') {
          return (
            <circle
              key={ele.key}
              cx={ele.x * (zoomPercent / 100)}
              cy={ele.y * (zoomPercent / 100)}
              r={ele.r * (zoomPercent / 100)}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fillOpacity="0"
            />
          );
        }
        return '';
      }),
    [zoomPercent, data],
  );

export default function SvgDrawer(): JSX.Element {
  const svgRef = useRef(undefined);
  const { startDrawing, finishDrawing, data } = useShape();

  const { zoomPercent, pixelSize, pixelColor } = useSelector(
    (state: RootStoreType) => state.shapeReducer,
  );

  const disPatch = useDispatch();

  const [paperWidth, paperHeight] = useMemo(
    () => [RAPHAEL_WIDTH * (zoomPercent / 100), RAPHAEL_HEIGHT * (zoomPercent / 100)],
    [zoomPercent],
  );

  return (
    <Container>
      <WrapPaperDiv
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseLeave={finishDrawing}
      >
        <svg width={paperWidth} height={paperHeight} ref={svgRef}>
          {DataList({ data, zoomPercent })}
        </svg>
      </WrapPaperDiv>
    </Container>
  );
}
