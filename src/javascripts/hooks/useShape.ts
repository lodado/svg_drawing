import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreType } from '@Redux/index';
import { setShapeData } from '@Redux/shape/action';
import { getAttr } from '@Global/util';
import useDebounce from './useDebounce';

export default function useShape() {
  const svgDrawerRef = useRef(undefined);
  const [pointer, setPointer] = useState([undefined, undefined]);
  const [endPointer, setEndPointer] = useState([undefined, undefined]);

  const { shapeTag, pixelSize, pixelColor } = useSelector(
    (state: RootStoreType) => state.shapeReducer,
  );
  const dispatch = useDispatch();

  const debouncePixelSize = useDebounce({ value: pixelSize });
  const debouncePixelColor = useDebounce({ value: pixelColor });

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setPointer([Number(offsetX), Number(offsetY)]);
  };

  const startDrawingByTouch = ({ nativeEvent }) => {
    const { touches } = nativeEvent;
    const bcr = svgDrawerRef.current.getBoundingClientRect();
    const startX = Math.abs(touches[0].pageX - bcr.left);
    const startY = Math.abs(touches[0].pageY - bcr.top);

    setPointer([startX, startY]);
  };

  const moveDrawingByTouch = ({ nativeEvent }) => {
    const { touches } = nativeEvent;

    const bcr = svgDrawerRef.current.getBoundingClientRect();

    const moveX = Math.abs(touches[0].pageX - bcr.left);
    const moveY = Math.abs(touches[0].pageY - bcr.top);

    setEndPointer([moveX, moveY]);
  };

  const finishDrawing = ({ nativeEvent }) => {
    let { offsetX, offsetY } = nativeEvent;
    const [startX, startY] = pointer;

    if (
      startX === undefined ||
      startY === undefined ||
      offsetX === undefined ||
      offsetY === undefined
    ) {
      return;
    }

    const { width, height } = svgDrawerRef.current.getBoundingClientRect();

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
      width,
      height,
    });
    dispatch(setShapeData(attr));
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

    const { target } = nativeEvent;
    const { width, height } = target.parentNode.getBoundingClientRect();

    const attr = getAttr({
      shapeTag,
      offsetX,
      offsetY,
      startX,
      startY,
      debouncePixelColor,
      debouncePixelSize,
      width,
      height,
    });

    dispatch(setShapeData(attr));
    setPointer([undefined, undefined]);
    setEndPointer([undefined, undefined]);
  };

  return {
    svgDrawerRef,
    startDrawing,
    finishDrawing,
    startDrawingByTouch,
    moveDrawingByTouch,
    finishDrawingByTouch,
  };
}
