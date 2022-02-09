import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 73vh;
  width: 95vw;

  justify-content: space-evenly;
  align-items: center;
  margin: 2vh 2vw 0 2vw;
`;

export const WrapPaperDiv = styled.div`
  background-color: var(--white, #fff);
  border: 0.02rem solid var(--ShallowGrey, rgba(0, 0, 0, 0.45));
`;

export default Container;
