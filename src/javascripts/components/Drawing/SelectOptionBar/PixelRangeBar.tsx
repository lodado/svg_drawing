import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStoreType } from '@Redux/index';
import { setPixelSize } from '@Redux/shape/action';
import {
  THROTTLE_CYCLE,
  MIN_PIXEL_BORDER,
  MAX_PIXEL_BORDER,
  DEFAULT_PIXEL_VAULE,
} from '@Global/constant';
import { PixelBarContainer, PixelBarStyledDiv } from './style';

export default function PixelRangeBar(): JSX.Element {
  const [throttle, setThrottle] = useState(false);
  const { pixelSize } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();
  const inputRef = useRef(null);

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!throttle) setThrottle(true);

    setTimeout(() => {
      if (throttle) return;

      const { target } = event;
      const { value } = target;
      disPatch(setPixelSize(Number(value)));
      setThrottle(false);
    }, THROTTLE_CYCLE);
  };

  const pixelText = ` ${pixelSize}px`.slice(-4);

  return (
    <PixelBarContainer>
      <span>{`선 두께 : ${pixelText}`}</span>
      <PixelBarStyledDiv>
        <span>5px</span>
        <input
          ref={inputRef}
          onChange={handleInputValue}
          type="range"
          min={MIN_PIXEL_BORDER}
          max={MAX_PIXEL_BORDER}
          defaultValue={DEFAULT_PIXEL_VAULE}
        />
        <span>50px</span>
      </PixelBarStyledDiv>
    </PixelBarContainer>
  );
}
