import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorChangeHandler, ColorResult, HuePicker, PhotoshopPicker } from 'react-color';

import { setPixelColor, setPixelModalState } from '@Redux/shape/action';
import { RootStoreType } from '@Redux/index';
import Modal from '@Component/common/modal';
import useDebounce from '@Hook/useDebounce';

import PixelRangeBar from './PixelRangeBar';
import Container, { ColDiv, ColorDiv, ColCenterDiv } from './style';

export default function SelectOptionBar(): JSX.Element {
  const { pixelColor, modalState } = useSelector((state: RootStoreType) => state.shapeReducer);
  const disPatch = useDispatch();
  const debounceValue = useDebounce({ value: pixelColor });

  const handleChangePicker: ColorChangeHandler = (color: ColorResult) => {
    disPatch(setPixelColor(color.hex));
  };

  const shutDownModalEvent = () => {
    disPatch(setPixelModalState(false));
  };

  return (
    <>
      <Container>
        <PixelRangeBar />
        <ColCenterDiv onClick={() => disPatch(setPixelModalState(true))}>
          <ColorDiv pixelColor={debounceValue} />
          <span>{`color : ${debounceValue}`}</span>
        </ColCenterDiv>
        <ColDiv>
          <HuePicker color={pixelColor} onChange={handleChangePicker} />
        </ColDiv>
      </Container>

      <Modal isOpen={modalState} onClose={shutDownModalEvent} zIndex={100}>
        <PhotoshopPicker
          onAccept={shutDownModalEvent}
          onCancel={shutDownModalEvent}
          color={pixelColor}
          onChange={handleChangePicker}
        />
      </Modal>
    </>
  );
}
