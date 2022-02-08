import React, { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Raphael, Paper, Set, Circle, Ellipse, Image, Rect, Text, Path, Line } from 'react-raphael';

import { RootStoreType } from '@Redux/index';
import useShape from '@Hook/useShape';
import { RAPHAEL_HEIGHT, RAPHAEL_WIDTH } from '@Global/constant';

import Container, { WrapPaperDiv } from './style';

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
        <Paper width={paperWidth} height={paperHeight} ref={svgRef}>
          {data.map((ele) => {
            return (
              <ele.element
                key={ele.key}
                x={ele.x * (zoomPercent / 100)}
                y={ele.y * (zoomPercent / 100)}
                r={ele.r * (zoomPercent / 100)}
                attr={ele.attr}
              />
            );
          })}
        </Paper>
      </WrapPaperDiv>
    </Container>
  );
}
