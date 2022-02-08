import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { setCanvasTag } from '@Redux/shape/action';
import useDebounce from '@Hook/useDebounce';

import Container, { StyledCanvas } from './style';

export default function Canvas(): JSX.Element {
  const canvasRef = useRef(undefined);
  const [isDraw, setDraw] = useState(false);
  const [ctx, setCtx] = useState(undefined);

  const { zoomPercent, pixelSize, pixelColor } = useSelector(
    (state: RootStoreType) => state.shapeReducer,
  );
  const debouncePixelSize = useDebounce({ value: pixelSize });
  const debouncePixelColor = useDebounce({ value: pixelColor });

  const disPatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    disPatch(setCanvasTag(canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const newRect = canvas.parentNode.getBoundingClientRect();
    canvas.style.width = newRect.width * Math.floor(zoomPercent / 100);
    canvas.style.height = newRect.height * Math.floor(zoomPercent / 100);
  }, [zoomPercent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = debouncePixelColor;
    context.lineWidth = parseInt(debouncePixelSize, 10);

    setCtx(context);
  }, [debouncePixelSize, debouncePixelColor]);

  const startDrawing = () => {
    setDraw(true);
  };

  const finishDrawing = () => {
    setDraw(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (!isDraw) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  return (
    <Container>
      <StyledCanvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      />
    </Container>
  );
}
