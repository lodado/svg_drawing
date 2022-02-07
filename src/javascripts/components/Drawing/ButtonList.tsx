import React from 'react';
import ShapeButton from './ShapeButton';

export default function ButtonList() {
  return (
    <div>
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <ShapeButton />
      <button type="button">load</button>
      <button type="button">save</button>
    </div>
  );
}
