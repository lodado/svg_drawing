import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '@Redux/index';
import { setPixelSize } from '@Redux/shape/action';

export default function PixelRangeBar() {
  const inputRef = useRef(null);
  const [throttle, setThrottle] = useState(false);
  const { pixelSize } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (throttle) return;

      setThrottle(true);
      const { target } = event;
      const { value } = target;

      disPatch(setPixelSize(Number(value)));
      setThrottle(false);
    }, 150);
  };

  return (
    <div>
      {pixelSize}
      <input ref={inputRef} onChange={handleInputValue} type="range" min="5" max="50" />
    </div>
  );
}
