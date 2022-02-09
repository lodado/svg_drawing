import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStoreType } from '@Redux/index';

import useDebounce from './useDebounce';

function getAttr({
  shapeTag,
  offsetX,
  offsetY,
  startX,
  startY,
  debouncePixelColor,
  debouncePixelSize,
}) {
  const obj = {
    element: shapeTag,
    key: `${shapeTag}${Date.now()}`,
    stroke: debouncePixelColor,
    strokeWidth: debouncePixelSize,
  };

  switch (shapeTag) {
    case 'line':
      return {
        ...obj,
        x1: startX,
        y1: startY,
        x2: offsetX,
        y2: offsetY,
      };

    case 'circle':
      return {
        ...obj,
        x: (offsetX + startX) / 2,
        y: (offsetY + startY) / 2,
        r: Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2) / 2,
      };

    default:
      return {};
  }
}

export default function useShape() {
  const [data, setData] = useState([]);
  const [pointer, setPointer] = useState([undefined, undefined]);
  const [endPointer, setEndPointer] = useState([undefined, undefined]);

  const { shapeTag, zoomPercent, pixelSize, pixelColor } = useSelector(
    (state: RootStoreType) => state.shapeReducer,
  );
  const debouncePixelSize = useDebounce({ value: pixelSize });
  const debouncePixelColor = useDebounce({ value: pixelColor });

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setPointer([Number(offsetX), Number(offsetY)]);
  };

  const startDrawingByTouch = ({ nativeEvent }) => {
    const { target, touches } = nativeEvent;
    const bcr = target.parentNode.getBoundingClientRect();
    const startX = Math.abs(touches[0].pageX - bcr.left);
    const startY = Math.abs(touches[0].pageY - bcr.top);

    setPointer([startX, startY]);
  };

  const moveDrawingByTouch = ({ nativeEvent }) => {
    const { target, touches } = nativeEvent;
    const bcr = target.parentNode.getBoundingClientRect();

    const moveX = Math.abs(touches[0].pageX - bcr.left);
    const moveY = Math.abs(touches[0].pageY - bcr.top);

    setEndPointer([moveX, moveY]);
  };

  const finishDrawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent;
    const [startX, startY] = pointer;

    if (startX === undefined || startY === undefined) {
      return;
    }

    offsetX = Number(offsetX);
    offsetY = Number(offsetY);

    const attr = getAttr({
      shapeTag,
      offsetX,
      offsetY,
      startX,
      startY,
      debouncePixelColor,
      debouncePixelSize,
    });

    setData(data.concat(attr));
    setPointer([undefined, undefined]);
    setEndPointer([undefined, undefined]);
  };

  const finishDrawingByTouch = ({ nativeEvent }) => {
    const [startX, startY] = pointer;
    const [offsetX, offsetY] = endPointer;

    if (
      startX === undefined ||
      startY === undefined ||
      offsetX === undefined ||
      offsetY === undefined
    ) {
      return;
    }

    const attr = getAttr({
      shapeTag,
      offsetX,
      offsetY,
      startX,
      startY,
      debouncePixelColor,
      debouncePixelSize,
    });

    setData(data.concat(attr));
    setPointer([undefined, undefined]);
    setEndPointer([undefined, undefined]);
  };

  return {
    startDrawing,
    finishDrawing,
    startDrawingByTouch,
    moveDrawingByTouch,
    finishDrawingByTouch,
    data,
  };
}
