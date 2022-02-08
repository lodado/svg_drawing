import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { setCanvasTag } from '@Redux/shape/action';
import useDebounce from '@Hook/useDebounce';
import { DEBOUNCE_CYCLE } from '@Global/constant';

import Container, { StyledCanvas } from './style';

export default function Canvas(): JSX.Element {
  const canvasRef = useRef(undefined);
  const [isDraw, setDraw] = useState(false);
  const [ctx, setCtx] = useState(undefined);

  const { pixelSize, pixelColor } = useSelector((state: RootStoreType) => state.shapeReducer);
  const debouncePixelSize = useDebounce({ value: pixelSize });
  const debouncePixelColor = useDebounce({ value: pixelColor });

  const disPatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    let resizeEventId = 0;

    const resizeCanvasEvent = () => {
      if (resizeEventId > 0) {
        clearTimeout(resizeEventId);
      }

      const resizeEvent = () => {
        const newRect = canvas.parentNode.getBoundingClientRect();
        canvas.style.width = newRect.width;
        canvas.style.height = newRect.height;
        resizeEventId = 0;
      };

      resizeEventId = Number(setTimeout(resizeEvent, DEBOUNCE_CYCLE));
    };

    disPatch(setCanvasTag(canvas));
    window.addEventListener('resize', resizeCanvasEvent);
    resizeCanvasEvent();

    return () => {
      window.removeEventListener('resize', resizeCanvasEvent);
    };
  }, []);

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
