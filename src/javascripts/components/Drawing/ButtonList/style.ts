import styled from 'styled-components';
import { hoverMenuBar } from '@Global/mixin';

const Container = styled.div`
  display: flex;
  position: fixed;

  flex-direction: row;
  flex-wrap: wrap;

  min-height: 4.8rem;
  min-width: 75vw;
  background-color: var(--MenuColor, #fff);

  justify-content: space-evenly;
  align-items: center;
  margin: 1vh 12.5vw 1vh 12.5vw;

  ${hoverMenuBar};
`;

export const ButtonContainer = styled.div`
  & > * {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

export default Container;
