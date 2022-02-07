import React from 'react';
import ButtonList from './ButtonList';
import Canvas from './Canvas';
import PixelRangeBar from './PixelRangeBar';

export default function CanvasPage() {
  return (
    <div>
      <ButtonList />
      <PixelRangeBar />
      <Canvas />
    </div>
  );
}
