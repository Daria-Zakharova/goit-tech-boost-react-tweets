import styled from "styled-components";
import { mediaQuery } from "../../../style/breakpoints";

export const Page = styled.section`
  min-height: calc(100vh - 90px);
  padding-top: 120px;
  padding-bottom: 50px;
  ${mediaQuery("tab")} {
    padding-top: 145px;
    padding-bottom: 75px;
  }
  ${mediaQuery("desk")} {
    padding-top: 170px;
    padding-bottom: 100px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  line-height: 1;
  text-align: center;
  color: var(--color-accent);
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;
