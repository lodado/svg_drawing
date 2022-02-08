import React from 'react';
import { ButtonContainer } from './style';

export default function ImageIOContainer(): JSX.Element {
  return (
    <ButtonContainer>
      <button type="button">undo</button>
      <button type="button">redo</button>
    </ButtonContainer>
  );
}
