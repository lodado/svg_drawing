/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import useShape from '@Hook/useShape';
import { RAPHAEL_HEIGHT, RAPHAEL_WIDTH } from '@Global/constant';

import Container, { WrapPaperDiv } from './style';

const DataList = ({ data, zoomPercent, paperWidth, paperHeight }): JSX.Element[] =>
  useMemo(
    () =>
      data.map((ele) => {
        const { element } = ele;

        if (element === 'line') {
          return (
            <line
              key={ele.key}
              x1={ele.x1 * paperWidth}
              y1={ele.y1 * paperHeight}
              x2={ele.x2 * paperWidth}
              y2={ele.y2 * paperHeight}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
            />
          );
        }

        if (element === 'circle') {
          const { startX, offsetX, startY, offsetY } = ele;

          const [x1, y1] = [startX * paperWidth, startY * paperHeight];
          const [x2, y2] = [offsetX * paperWidth, offsetY * paperHeight];

          return (
            <circle
              key={ele.key}
              cx={ele.x * paperWidth}
              cy={ele.y * paperHeight}
              r={Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) / 2}
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
              x={ele.x * paperWidth}
              y={ele.y * paperHeight}
              width={ele.width * paperWidth}
              height={ele.height * paperHeight}
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
              cx={ele.cx * paperWidth}
              cy={ele.cy * paperHeight}
              rx={ele.rx * paperWidth}
              ry={ele.ry * paperHeight}
              stroke={ele.stroke}
              strokeWidth={ele.strokeWidth}
              fill="None"
            />
          );
        }
        if (element === 'curv') {
          const { startX, startY, Cx1, Cy1, Cx2, Cy2, endX, endY } = ele;
          const d = `M${startX * paperWidth},${startY * paperHeight}, C${Cx1 * paperWidth},${
            Cy1 * paperHeight
          } ${Cx2 * paperWidth},${Cy2 * paperHeight} ${endX * paperWidth},${endY * paperHeight}`;

          return (
            <path
              key={ele.key}
              d={d}
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
        ref={svgRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseLeave={finishDrawing}
        onTouchStart={startDrawingByTouch}
        onTouchMove={moveDrawingByTouch}
        onTouchEnd={finishDrawingByTouch}
      >
        <svg
          id="svgDrawer"
          xmlns="http://www.w3.org/2000/svg"
          width={paperWidth}
          height={paperHeight}
        >
          {DataList({ data, zoomPercent, paperWidth, paperHeight })}
        </svg>
      </WrapPaperDiv>
    </Container>
  );
}
