import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div<{ backgroundImage: string }>`
  background: url("${({ backgroundImage }) => backgroundImage}") 
      no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  height: 200px;
  width: 200px;
  cursor: pointer;
  border: 1px solid ${theme.colorsPalette.gray.lighter};
  border-radius: 8px;
`;

const Paragraph = styled.p`
  margin: 0;
  z-index: 2;
  color: white;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: 60px;
  width: 200px;
  background: linear-gradient(to top, #0000008c, transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
`;

export { ImageContainer, MainContainer, Paragraph };
