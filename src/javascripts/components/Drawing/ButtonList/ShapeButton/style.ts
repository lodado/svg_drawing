import styled from 'styled-components';
import { setHoverCursor } from '@Global/mixin';

interface Props {
  currentTagName: string;
  text: string;
}

const StyledDiv = styled.div<Props>`
  display: flex;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  text-align: center;
  flex-direction: column;
  margin: 0 0.2rem 0 0.2rem;
  font-size: 1.2rem;

  ${({ text, currentTagName }) => {
    return text === currentTagName
      ? 'font-size: 1.5rem;color:var(--MarineBlue, #0072ff); font-weight:bold;'
      : '';
  }}
  ${setHoverCursor};
`;

export default StyledDiv;
