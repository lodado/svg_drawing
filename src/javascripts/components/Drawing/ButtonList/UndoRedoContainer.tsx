import React from 'react';
import { ButtonContainer } from './style';

export default function UndoRedoContainer(): JSX.Element {
  return (
    <ButtonContainer>
      <button type="button">save</button>
      <button type="button">load</button>
    </ButtonContainer>
  );
}
