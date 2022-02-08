import { useState } from 'react';
import { Raphael, Paper, Set, Circle, Ellipse, Image, Rect, Text, Path, Line } from 'react-raphael';
import { useSelector } from 'react-redux';
import { RootStoreType } from '@Redux/index';

import useDebounce from './useDebounce';

export default function useShape() {
  const [data, setData] = useState([]);
  const [pointer, setPointer] = useState([undefined, undefined]);

  const { pixelSize, pixelColor } = useSelector((state: RootStoreType) => state.shapeReducer);
  const debouncePixelSize = useDebounce({ value: pixelSize });
  const debouncePixelColor = useDebounce({ value: pixelColor });

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setPointer([Number(offsetX), Number(offsetY)]);
  };

  const finishDrawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent;
    const [startX, startY] = pointer;

    if (startX === undefined || startY === undefined) {
      return;
    }

    offsetX = Number(offsetX);
    offsetY = Number(offsetY);

    const attr = {
      element: Circle,
      key: Date.now(),
      x: (offsetX + startX) / 2,
      y: (offsetY + startY) / 2,
      r: Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2) / 2,
      attr: {
        stroke: debouncePixelColor,
        'stroke-width': debouncePixelSize,
      },
    };

    setData(data.concat(attr));
    setPointer([undefined, undefined]);
  };

  return { startDrawing, finishDrawing, data };
}
