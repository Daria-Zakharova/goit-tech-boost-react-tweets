import styled from "styled-components";
import { Btn } from "../Button/Button.styled";
import { mediaQuery } from "../../style/breakpoints";

export const ButtonHome = styled(Btn)`
  width: fit-content;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 120px;
  padding: 14px 10px;

  ${mediaQuery("tab")} {
    height: 40px;
    top: 145px;
    padding: 14px;
    gap: 10px;
  }
  ${mediaQuery("desk")} {
    top: 170px;
  }
`;
