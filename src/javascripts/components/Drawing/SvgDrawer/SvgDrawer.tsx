/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import useShape from '@Hook/useShape';
import { RAPHAEL_HEIGHT, RAPHAEL_WIDTH } from '@Global/constant';

import Container, { WrapPaperDiv } from './style';

const DataList = ({ data, zoomPercent }): JSX.Element[] =>
  useMemo(
    () =>
      data.map((ele) => {
        const { element } = ele;

        if (element === 'line') {
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

        if (element === 'circle') {
          return (
            <circle
              key={ele.key}
              cx={ele.x * (zoomPercent / 100)}
              cy={ele.y * (zoomPercent / 100)}
              r={ele.r * (zoomPercent / 100)}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fill="None"
            />
          );
        }

        if (element === 'rect') {
          return (
            <rect
              key={ele.key}
              x={ele.x}
              y={ele.y}
              width={ele.width}
              height={ele.height}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fill="None"
            />
          );
        }

        if (element === 'ellipse') {
          return (
            <ellipse
              key={ele.key}
              cx={ele.cx}
              cy={ele.cy}
              rx={ele.rx}
              ry={ele.ry}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fill="None"
            />
          );
        }
        if (element === 'curv') {
          return (
            <path
              key={ele.key}
              d={ele.d}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fill="None"
            />
          );
        }

        return '';
      }),
    [zoomPercent, data.length],
  );

export default function SvgDrawer(): JSX.Element {
  const svgRef = useRef(undefined);
  const {
    startDrawing,
    finishDrawing,
    startDrawingByTouch,
    finishDrawingByTouch,
    moveDrawingByTouch,
  } = useShape();

  const { data, zoomPercent } = useSelector((state: RootStoreType) => state.shapeReducer);

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
        onTouchStart={startDrawingByTouch}
        onTouchMove={moveDrawingByTouch}
        onTouchEnd={finishDrawingByTouch}
      >
        <svg width={paperWidth} height={paperHeight} ref={svgRef}>
          {DataList({ data, zoomPercent })}
        </svg>
      </WrapPaperDiv>
    </Container>
  );
}
