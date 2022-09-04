import styled from "styled-components";

import theme from "../../theme";

import { TCardProps } from "./types";

export const CardContainer = styled.article<Pick<TCardProps, "onClick">>`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colorsPalette.white.default};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.1s;

  ${({ onClick }) =>
    onClick &&
    `
      cursor: pointer;

      &:hover {
        background-color: ${theme.colorsPalette.gray.superLight};
      }
    `}
`;

export const CardHeader = styled.h1`
  color: ${theme.colorsPalette.gray.darker};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.bolder};
  margin-top: 0;
`;
