import React from 'react';

import ButtonList from './ButtonList/ButtonList';
import Canvas from './Canvas/Canvas';
import SelectOptionBar from './SelectOptionBar';

export default function CanvasPage(): JSX.Element {
  return (
    <div>
      <Canvas />
      <ButtonList />

      <SelectOptionBar />
    </div>
  );
}
