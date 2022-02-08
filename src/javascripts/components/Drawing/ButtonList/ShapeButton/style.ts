import styled from 'styled-components';
import { hoverMenuBar } from '@Global/mixin';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  min-height: 4.8rem;
  min-width: 80vw;

  justify-content: space-evenly;
  align-items: center;
  margin: 1vh 8vw 0 8vw;

  ${hoverMenuBar};
`;

export default Container;
