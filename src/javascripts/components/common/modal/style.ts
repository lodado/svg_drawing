import styled from 'styled-components';

export const Container = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const Content = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ zIndex }) => zIndex};
`;

export const Overlay = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${({ zIndex }) => zIndex - 1};
`;
