import { css } from 'styled-components';

export const GreyBackgroundShadow = css`
  border-top: 0.05rem solid rgba(0, 0, 0, 0.05);
  border-left: 0.05rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;

  box-shadow: 0.3rem 0.3rem var(--ShallowGrey, rgba(0, 0, 0, 0.15));
`;

export const hoverMenuBar = css`
  ${GreyBackgroundShadow}

  &:hover {
    transition: all 0.3s ease;
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
    box-shadow: 0.1rem 0.1rem var(--DarkGrey, rgba(0, 0, 0, 0.25));
  }
`;
