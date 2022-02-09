import React from 'react';
import { useDispatch } from 'react-redux';

import { undoData, redoData } from '@Redux/shape/action';
import { ButtonContainer } from './style';

export default function UndoRedoContainer(): JSX.Element {
  const disPatch = useDispatch();
  return (
    <ButtonContainer>
      <button
        type="button"
        onClick={() => {
          disPatch(undoData());
        }}
      >
        undo
      </button>
      <button
        type="button"
        onClick={() => {
          disPatch(redoData());
        }}
      >
        redo
      </button>
    </ButtonContainer>
  );
}
