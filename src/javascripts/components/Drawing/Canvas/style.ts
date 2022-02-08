import styled from 'styled-components';
import { GreyBackgroundShadow } from '@Global/mixin';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 80vh;
  width: 95vw;

  justify-content: space-evenly;
  align-items: center;
  margin: 1vh 2vw 0 2vw;

  ${GreyBackgroundShadow};
`;

export default Container;
