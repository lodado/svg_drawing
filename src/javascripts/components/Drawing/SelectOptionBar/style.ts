import styled from 'styled-components';
import { hoverMenuBar } from '@Global/mixin';

const Container = styled.div`
  display: inline-flex;
  position: fixed;

  width: 95vw;
  height: 10vh;

  bottom: 3vh;
  left: 2vw;
  right: 2vw;

  background-color: #fff;
  justify-content: space-around;
  align-items: center;

  ${hoverMenuBar};
`;

export const PixelBarContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const ColDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  & > span {
    margin: 0.2rem;
  }
`;

export const ColCenterDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ColorDiv = styled.div<{ pixelColor: string }>`
  width: 50%;
  height: 1rem;

  margin-bottom: 0.5rem;

  background-color: ${({ pixelColor }) => pixelColor};
`;

export const PixelBarStyledDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > span {
    margin: 0.2rem;
  }
`;

export default Container;
