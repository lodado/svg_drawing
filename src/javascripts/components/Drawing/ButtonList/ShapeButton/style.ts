import styled from 'styled-components';

interface Props {
  currentTagName: string;
  text: string;
}

const StyledDiv = styled.div<Props>`
  width: 3rem;
  text-align: center;
  margin: 0 0.2rem 0 0.2rem;

  ${({ text, currentTagName }) => {
    return text === currentTagName
      ? 'font-size: 1.3rem;color:var(--MarineBlue, #0072ff); font-weight:bold;'
      : '';
  }}
`;

export default StyledDiv;
