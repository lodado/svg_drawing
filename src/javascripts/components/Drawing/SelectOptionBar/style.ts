import styled from 'styled-components';
import { hoverMenuBar } from '@Global/mixin';

const Container = styled.div`
  display: flex;
  position: fixed;

  width: 94vw;
  height: 10vw;

  bottom: 3vh;
  left: 3vw;
  right: 3vw;

  justify-content: space-evenly;
  align-items: center;

  ${hoverMenuBar};
`;

export default Container;
